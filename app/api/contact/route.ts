import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      inquiryPurpose,
      description,
      fullName,
      email,
      organization,
      phoneNumber,
      message,
      // For the contact-form component
      firstName,
      lastName,
      budget,
      companyName,
      projectType
    } = body;

    // Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) {
      console.error('Missing email environment variables');
      return NextResponse.json(
        { message: 'Email configuration error' },
        { status: 500 }
      );
    }

    // Create transporter with more specific Gmail configuration
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Determine which form was submitted and create appropriate email content
    let emailSubject = '';
    let emailHtml = '';

    if (inquiryPurpose) {
      // Contact page form - Enhanced with all fields
      emailSubject = `New Contact Form Submission - ${inquiryPurpose}`;
      emailHtml = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Inquiry Purpose:</strong> ${inquiryPurpose}</p>
        <p><strong>Description:</strong> ${description}</p>
        ${firstName && lastName ? `<p><strong>Name:</strong> ${firstName} ${lastName}</p>` : ''}
        ${fullName ? `<p><strong>Full Name:</strong> ${fullName}</p>` : ''}
        <p><strong>Email:</strong> ${email}</p>
        ${companyName ? `<p><strong>Company Name:</strong> ${companyName}</p>` : ''}
        ${organization ? `<p><strong>Organization:</strong> ${organization}</p>` : ''}
        ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
        ${projectType ? `<p><strong>Project Type:</strong> ${projectType}</p>` : ''}
        <p><strong>Phone Number:</strong> +92 ${phoneNumber}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
      `;
    } else {
      // Contact form component
      emailSubject = `New Contact Form Submission - ${projectType || 'General Inquiry'}`;
      emailHtml = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> +92 ${phoneNumber}</p>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
      `;
    }

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      return NextResponse.json(
        { message: 'Email service configuration error' },
        { status: 500 }
      );
    }

    // Send email
    const mailOptions = {
      from: `"Synctom Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: emailSubject,
      html: emailHtml,
      replyTo: email, // Allow replying directly to the form submitter
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json(
      { message: 'Email sent successfully', messageId: info.messageId },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send email';
    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        errorMessage = 'Email authentication failed. Please check your credentials.';
      } else if (error.message.includes('ENOTFOUND')) {
        errorMessage = 'Email server connection failed.';
      } else if (error.message.includes('ETIMEDOUT')) {
        errorMessage = 'Email server timeout. Please try again.';
      }
    }

    return NextResponse.json(
      { message: errorMessage, error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}