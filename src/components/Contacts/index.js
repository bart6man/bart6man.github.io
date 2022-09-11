export default function Message() {
  return (
    <>
      <div className="contact">
        <div className="contact-img">
          <img src="/photos/1.png" alt="..." />
        </div>

        <div className="contact-block">
          <h1>Contact me</h1>

          <p className="contact-text">
            For management, booking, collaboration, licenses, please use the
            form below
          </p>

          <form
            action="https://mailthis.to/BART6MAN"
            method="POST"
            encType="multipart/form-data"
          >
            <div className="contact-item">
              <input
                className="contact-input"
                type="text"
                name="name"
                placeholder="Your name"
              />
              <input
                className="contact-input"
                type="email"
                name="_replyto"
                placeholder="Your email"
              />
              <textarea
                className="contact-input"
                name="message"
                placeholder="Enter your message here"
              ></textarea>

              <input
                type="hidden"
                name="_subject"
                value="Contact form submitted"
              />
              <input
                type="hidden"
                name="_after"
                value="http://localhost:3001/contacts"
              />
              <input type="hidden" name="_honeypot" value="" />
              <input type="hidden" name="_confirmation" value="" />
            </div>

            <input className="send-button" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </>
  );
}
