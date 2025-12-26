function ContactUs({ name, email, message }) {
  return `
  <div style="
    max-width:600px;
    margin:0 auto;
    padding:16px;
    border-radius:12px;
    color:#000;
  ">

    <h1 style="
      font-size:20px;
      text-align:center;
      margin-bottom:16px;
    ">
      Form Filled By: ${email}
    </h1>

    <div style="margin-bottom:12px;">
      <strong>Name:</strong>
      <div>${name}</div>
      <hr style="border:0;height:1px;background:rgba(255,255,255,0.3);" />
    </div>

    <div style="margin-bottom:12px;">
      <strong>Email:</strong>
      <div>${email}</div>
      <hr style="border:0;height:1px;background:rgba(255,255,255,0.3);" />
    </div>

    <div>
      <strong>Message:</strong>
      <div style="
        margin-top:6px;
        word-break:break-word;
        white-space:normal;
      ">
        ${message}
      </div>
    </div>

  </div>
  `;
}

export default ContactUs;
