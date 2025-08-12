import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY);

interface ContactFormData {
  name: string;
  phone: string;
  email?: string;
  problemDescription: string;
}

export async function sendContactFormEmail(formData: ContactFormData): Promise<boolean> {
  try {
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 30px; border-bottom: 2px solid #1e3a8a; padding-bottom: 20px;">
            <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 10px;">
              <h1 style="color: #1e3a8a; margin: 0; font-size: 28px; font-weight: bold;">ChallanSettle</h1>
            </div>
            <p style="color: #666; margin: 5px 0 0 0; font-size: 14px;">New Contact Form Submission</p>
          </div>
          
          <div style="margin-bottom: 25px;">
            <h2 style="color: #1e3a8a; margin-bottom: 20px; font-size: 22px;">Contact Details</h2>
            
            <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
              <strong style="color: #1e3a8a;">Name:</strong>
              <p style="margin: 5px 0 0 0; font-size: 16px;">${formData.name}</p>
            </div>
            
            <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
              <strong style="color: #1e3a8a;">Phone Number:</strong>
              <p style="margin: 5px 0 0 0; font-size: 16px;">${formData.phone}</p>
            </div>
            
            ${formData.email ? `
            <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
              <strong style="color: #1e3a8a;">Email:</strong>
              <p style="margin: 5px 0 0 0; font-size: 16px;">${formData.email}</p>
            </div>
            ` : ''}
            
            <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px;">
              <strong style="color: #1e3a8a;">Problem Description:</strong>
              <p style="margin: 5px 0 0 0; font-size: 16px; line-height: 1.5;">${formData.problemDescription}</p>
            </div>
          </div>
          
          <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              Submitted on ${new Date().toLocaleDateString('en-IN', { 
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
        </div>
      </div>
    `;

    const emailText = `
New Contact Form Submission - Challan Settle

Contact Details:
Name: ${formData.name}
Phone: ${formData.phone}
${formData.email ? `Email: ${formData.email}` : ''}

Problem Description:
${formData.problemDescription}

Submitted on: ${new Date().toLocaleDateString('en-IN')} at ${new Date().toLocaleTimeString('en-IN')}
    `;

    await mailService.send({
      to: 'info.challansettle@gmail.com',
      from: 'info.challansettle@gmail.com', // Using the same email as sender for testing
      subject: `New Contact Form Submission from ${formData.name}`,
      text: emailText,
      html: emailHtml,
    });

    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}