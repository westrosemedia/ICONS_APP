export default function TestPage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Test Page - App is Working!</h1>
      <p>If you can see this, the deployment is successful.</p>
      <p>Time: {new Date().toISOString()}</p>
    </div>
  );
}
