import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export interface FeatureAccess {
  vault: boolean;
  gallery: boolean;
  iconSociety: boolean;
  community: boolean;
  forms: boolean;
  quiz: boolean;
  sales: boolean;
  home: boolean;
}

export interface PackageFeatures {
  [key: string]: {
    vault: boolean;
    gallery: boolean;
    iconSociety: boolean;
    community: boolean;
    forms: boolean;
  };
}

// Define which features each package includes
const packageFeatures: PackageFeatures = {
  empire: {
    vault: true,
    gallery: true,
    iconSociety: true,
    community: true,
    forms: true
  },
  spotlight: {
    vault: false,
    gallery: true,
    iconSociety: false,
    community: false,
    forms: true
  },
  lite: {
    vault: true,
    gallery: true,
    iconSociety: false,
    community: false,
    forms: true
  },
  immersion: {
    vault: false,
    gallery: true,
    iconSociety: false,
    community: false,
    forms: true
  }
};

export class FeatureGatingService {
  private static instance: FeatureGatingService;
  private userFeatures: FeatureAccess | null = null;

  static getInstance(): FeatureGatingService {
    if (!FeatureGatingService.instance) {
      FeatureGatingService.instance = new FeatureGatingService();
    }
    return FeatureGatingService.instance;
  }

  async getUserFeatures(userId: string): Promise<FeatureAccess> {
    try {
      const userDoc = await getDoc(doc(db, "users", userId));
      if (!userDoc.exists()) {
        return this.getDefaultFeatures();
      }

      const userData = userDoc.data();
      const packageType = userData.packageType || 'spotlight';
      
      // Get base features from package
      const packageFeatureSet = packageFeatures[packageType] || packageFeatures.spotlight;
      
      // Check for ICON Society add-on
      const hasIconSociety = userData.iconSociety || false;
      
      const features: FeatureAccess = {
        vault: packageFeatureSet.vault,
        gallery: packageFeatureSet.gallery,
        iconSociety: packageFeatureSet.iconSociety || hasIconSociety,
        community: packageFeatureSet.community || hasIconSociety,
        forms: packageFeatureSet.forms,
        quiz: true, // Always accessible
        sales: true, // Always accessible
        home: true   // Always accessible
      };

      this.userFeatures = features;
      return features;
    } catch (error) {
      console.error('Error fetching user features:', error);
      return this.getDefaultFeatures();
    }
  }

  private getDefaultFeatures(): FeatureAccess {
    return {
      vault: false,
      gallery: false,
      iconSociety: false,
      community: false,
      forms: false,
      quiz: true,
      sales: true,
      home: true
    };
  }

  hasAccess(feature: keyof FeatureAccess): boolean {
    if (!this.userFeatures) {
      return false;
    }
    return this.userFeatures[feature];
  }

  getAccessibleFeatures(): string[] {
    if (!this.userFeatures) {
      return ['home', 'quiz', 'sales'];
    }
    
    return Object.entries(this.userFeatures)
      .filter(([_, hasAccess]) => hasAccess)
      .map(([feature, _]) => feature);
  }

  getUpgradeSuggestions(): string[] {
    if (!this.userFeatures) {
      return ['vault', 'gallery', 'iconSociety', 'community'];
    }

    const suggestions: string[] = [];
    
    if (!this.userFeatures.vault) {
      suggestions.push('Story Vault for voice notes');
    }
    if (!this.userFeatures.gallery) {
      suggestions.push('Content Gallery for professional photos');
    }
    if (!this.userFeatures.iconSociety) {
      suggestions.push('ICON Society for community support');
    }
    if (!this.userFeatures.community) {
      suggestions.push('Community access for networking');
    }

    return suggestions;
  }

  // Feature-specific access checks
  canAccessVault(): boolean {
    return this.hasAccess('vault');
  }

  canAccessGallery(): boolean {
    return this.hasAccess('gallery');
  }

  canAccessIconSociety(): boolean {
    return this.hasAccess('iconSociety');
  }

  canAccessCommunity(): boolean {
    return this.hasAccess('community');
  }

  canAccessForms(): boolean {
    return this.hasAccess('forms');
  }

  // Get feature descriptions for upgrade prompts
  getFeatureDescription(feature: string): string {
    const descriptions: Record<string, string> = {
      vault: "Capture voice notes and transform them into powerful content",
      gallery: "View your professional photos and videos",
      iconSociety: "Connect with other bold creators in our private community",
      community: "Network and collaborate with fellow entrepreneurs",
      forms: "Access to booking and intake forms"
    };
    
    return descriptions[feature] || "Premium feature";
  }
}

export default FeatureGatingService.getInstance(); 