import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Initialize Resend with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  return NextResponse.json({ 
    message: 'Contact form API endpoint. Use POST method with form data.',
    usage: 'This endpoint is used by the contact form on the website.',
    website: 'Go to http://localhost:3000 to see the website and contact form.'
  });
}

export async function POST(request) {
  try {
    const contentType = request.headers.get('content-type');
    let name, email, phone, message, attachments = [];

    if (contentType?.includes('multipart/form-data')) {
      // Handle form data with files
      const formData = await request.formData();
      name = formData.get('name');
      email = formData.get('email');
      phone = formData.get('phone');
      message = formData.get('message');
      
      // Handle file attachments
      const files = formData.getAll('attachments');
      for (const file of files) {
        if (file.size > 0) {
          const buffer = await file.arrayBuffer();
          attachments.push({
            filename: file.name,
            content: Buffer.from(buffer),
            contentType: file.type
          });
        }
      }
    } else {
      // Handle JSON data (for API calls)
      const data = await request.json();
      ({ name, email, phone, message } = data);
    }
    
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.log('📧 Contact form submission received (API key not configured):');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Phone:', phone || 'Not provided');
      console.log('Message:', message);
      
      return NextResponse.json({ 
        success: false, 
        error: 'Email service not configured. Please contact us directly at 404-838-7010.' 
      }, { status: 500 });
    }

    const emailData = {
      from: 'Klubhouse Therapy <onboarding@resend.dev>',
      to: ['admin@klubhousetherapyservices.com'],
      subject: 'New Contact Form Submission - Klubhouse Therapy Services',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission - Klubhouse Therapy Services</title>
        </head>
        <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="max-width: 650px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border-radius: 16px; overflow: hidden;">
            
            <!-- Header Section -->
            <div style="background: linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #8A2BE2 100%); padding: 40px 30px; text-align: center; position: relative;">
              <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(255,255,255,0.1); backdrop-filter: blur(10px);"></div>
              <div style="position: relative; z-index: 1;">
                <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); letter-spacing: 1px;">
                  ✨ NEW CONTACT FORM SUBMISSION ✨
                </h1>
                <p style="margin: 10px 0 0 0; color: #ffffff; font-size: 16px; font-weight: 500; text-shadow: 1px 1px 2px rgba(0,0,0,0.2);">
                  Klubhouse Therapy Services
                </p>
              </div>
            </div>

            <!-- Content Section -->
            <div style="padding: 40px 30px;">
              
              <!-- Contact Details Card -->
              <div style="background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%); padding: 25px; border-radius: 12px; margin-bottom: 25px; box-shadow: 0 5px 15px rgba(255,215,0,0.3);">
                <h2 style="margin: 0 0 20px 0; color: #8A2BE2; font-size: 22px; font-weight: 700; text-decoration: underline; text-decoration-color: #8A2BE2; text-underline-offset: 5px;">
                  👤 Contact Details
                </h2>
                <div style="background-color: rgba(255,255,255,0.9); padding: 20px; border-radius: 8px; backdrop-filter: blur(10px);">
                  <p style="margin: 0 0 12px 0; font-size: 16px; line-height: 1.6;">
                    <strong style="color: #8A2BE2; font-weight: 700;">Name:</strong> 
                    <span style="color: #333; font-weight: 600;">${name}</span>
                  </p>
                  <p style="margin: 0 0 12px 0; font-size: 16px; line-height: 1.6;">
                    <strong style="color: #8A2BE2; font-weight: 700;">Email:</strong> 
                    <a href="mailto:${email}" style="color: #8A2BE2; text-decoration: none; font-weight: 600; border-bottom: 2px solid #8A2BE2;">${email}</a>
                  </p>
                  <p style="margin: 0; font-size: 16px; line-height: 1.6;">
                    <strong style="color: #8A2BE2; font-weight: 700;">Phone:</strong> 
                    <a href="tel:${phone || 'Not provided'}" style="color: #8A2BE2; text-decoration: none; font-weight: 600; ${phone ? 'border-bottom: 2px solid #8A2BE2;' : ''}">${phone || 'Not provided'}</a>
                  </p>
                </div>
              </div>

              <!-- Message Card -->
              <div style="background: linear-gradient(135deg, #8A2BE2 0%, #9370DB 100%); padding: 25px; border-radius: 12px; margin-bottom: 25px; box-shadow: 0 5px 15px rgba(138,43,226,0.3);">
                <h2 style="margin: 0 0 20px 0; color: #FFD700; font-size: 22px; font-weight: 700; text-decoration: underline; text-decoration-color: #FFD700; text-underline-offset: 5px;">
                  💬 Message
                </h2>
                <div style="background-color: rgba(255,255,255,0.95); padding: 20px; border-radius: 8px; border-left: 5px solid #FFD700;">
                  <p style="margin: 0; color: #333; font-size: 16px; line-height: 1.8; font-weight: 500; white-space: pre-wrap;">${message}</p>
                </div>
              </div>

                             ${attachments.length > 0 ? `
               <!-- Attachments Section -->
               <div style="background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%); padding: 25px; border-radius: 12px; margin-bottom: 25px; border: 2px solid #8A2BE2;">
                 <h2 style="margin: 0 0 20px 0; color: #8A2BE2; font-size: 22px; font-weight: 700; text-decoration: underline; text-decoration-color: #8A2BE2; text-underline-offset: 5px;">
                   📎 Attachments (${attachments.length})
                 </h2>
                 <div style="background-color: rgba(255,255,255,0.9); padding: 20px; border-radius: 8px;">
                   ${attachments.map(file => `
                     <p style="margin: 0 0 8px 0; color: #333; font-size: 14px; line-height: 1.6;">
                       📄 <strong style="color: #8A2BE2;">${file.filename}</strong> 
                       <span style="color: #666; font-size: 12px;">(${(file.content.length / 1024).toFixed(1)} KB)</span>
                     </p>
                   `).join('')}
                 </div>
               </div>
               ` : ''}

               <!-- Action Section -->
               <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 25px; border-radius: 12px; text-align: center; border: 2px dashed #FFD700;">
                 <h3 style="margin: 0 0 15px 0; color: #8A2BE2; font-size: 18px; font-weight: 700;">
                   🚀 Next Steps
                 </h3>
                 <p style="margin: 0 0 20px 0; color: #666; font-size: 14px; line-height: 1.6;">
                   <strong style="color: #8A2BE2;">Response Time:</strong> We aim to respond within <span style="background-color: #FFD700; color: #8A2BE2; padding: 2px 8px; border-radius: 4px; font-weight: 700;">24 hours</span>
                 </p>
                 <div style="margin-top: 20px;">
                   <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%); color: #8A2BE2; padding: 12px 25px; text-decoration: none; border-radius: 25px; font-weight: 700; font-size: 14px; box-shadow: 0 4px 12px rgba(255,215,0,0.4); transition: all 0.3s ease;">
                     📧 Reply to ${name}
                   </a>
                 </div>
               </div>

            </div>

            <!-- Footer Section -->
            <div style="background: linear-gradient(135deg, #8A2BE2 0%, #4B0082 100%); padding: 30px; text-align: center;">
              <p style="margin: 0 0 10px 0; color: #FFD700; font-size: 16px; font-weight: 700;">
                ✨ Klubhouse Therapy Services ✨
              </p>
              <p style="margin: 0 0 15px 0; color: #ffffff; font-size: 14px; font-style: italic;">
                "At Klubhouse Therapy Services, <strong style="color: #FFD700;">CHRIS</strong> means <strong style="color: #FFD700;">Compassion</strong> and <strong style="color: #FFD700;">Care</strong> at Home."
              </p>
              <div style="border-top: 1px solid rgba(255,215,0,0.3); padding-top: 15px; margin-top: 15px;">
                <p style="margin: 0; color: #ffffff; font-size: 12px; opacity: 0.8;">
                  This message was sent from the contact form on 
                  <a href="https://klubhousetherapyservices.com" style="color: #FFD700; text-decoration: none; font-weight: 600; border-bottom: 1px solid #FFD700;">
                    klubhousetherapyservices.com
                  </a>
                </p>
                <p style="margin: 5px 0 0 0; color: #ffffff; font-size: 12px; opacity: 0.8;">
                  📞 <strong>404-838-7010</strong> | 📧 <strong>admin@klubhousetherapyservices.com</strong>
                </p>
              </div>
            </div>

          </div>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}

This message was sent from the contact form on klubhousetherapyservices.com
      `
    };

    // Add attachments if any
    if (attachments.length > 0) {
      emailData.attachments = attachments;
    }

    const data = await resend.emails.send(emailData);

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
} 