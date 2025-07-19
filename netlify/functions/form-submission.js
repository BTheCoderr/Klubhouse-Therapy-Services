exports.handler = async function(event, context) {
  // Only handle POST requests
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    // Parse form data
    const formData = new URLSearchParams(event.body);
    const data = Object.fromEntries(formData);
    
    // Log the submission with file info
    console.log('=== FORM SUBMISSION RECEIVED ===');
    console.log('Form Name:', data['form-name']);
    console.log('Child Name:', data.childName);
    console.log('Contact Email:', data.contactEmail);
    console.log('Contact Phone:', data.contactPhone);
    console.log('File Upload Field:', data.psychologicalEvaluation);
    console.log('File Upload Type:', typeof data.psychologicalEvaluation);
    console.log('File Upload Length:', data.psychologicalEvaluation ? data.psychologicalEvaluation.length : 'N/A');
    console.log('Has File Upload:', !!data.psychologicalEvaluation);
    console.log('Submitted At:', new Date().toISOString());
    console.log('=== END FORM SUBMISSION ===');

    // Redirect to thank you page
    return {
      statusCode: 302,
      headers: {
        'Location': '/thank-you'
      },
      body: ''
    };
  } catch (error) {
    console.error('Error processing form submission:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" })
    };
  }
}; 