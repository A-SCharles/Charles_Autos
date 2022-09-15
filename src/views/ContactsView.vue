<template>
  <section id="contact">
    <div class="container p-4">
      <div class="row">
        <div class="col-md-6 my-auto">
          <h1>Headquarters Location</h1>
          <h2>Western Cape</h2>
          <h3>Address:</h3>
          <p>
            159 Avenue Strain Road
            <br />
            Ottery
            <br />
            Cape Town
            <br />
            3927
          </p>
          <h3>Postal Address:</h3>
          <p>
            P O box 4213
            <br />
            Ottery
            <br />
            3961
          </p>
        </div>

        <div class="col-md-6 my-4">
          <div class="contact-container">
            <h2>Send me a message</h2>
            <p>
              Feel free to get in touch with us with anything related to our
              vehicles or how to improve our site. I will get back to you as
              soon as possible.
            </p>
            <form
              id="form"
              action="https://formspree.io/f/meqdeplo"
              method="POST"
            >
              <div class="wrapper">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
                <div class="gradient-bg"></div>
              </div>
              <div class="wrapper">
                <input
                  class="form-control"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
                <div class="gradient-bg"></div>
              </div>
              <div class="wrapper">
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  required
                />
                <div class="gradient-bg"></div>
              </div>
              <div class="wrapper wrapper-big">
                <textarea
                  class="form-text"
                  name="message"
                  placeholder="Message"
                ></textarea>
                <div class="gradient-bg"></div>
              </div>
              <button class="btn" type="submit">Send</button>
            </form>
          </div>
        </div>

        <div class="row">
          <h4>Customer Service: 0951 67 25 25</h4>
          <p>or e-mail <span>customer service</span></p>
        </div>
        <div class="row">
          <h4>Dealer Support & Mechanical Services Call: 0951 67 25 25</h4>
          <p>or e-mail <span>customer service</span></p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/*  */
.contact-container {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 70px;
  text-align: center;
  width: 600px;
  max-width: 100%;
}

.contact-container h2 {
  margin: 0 0 10px;
  /* opacity: 0.8; */
}

.contact-container p {
  /* opacity: 0.7; */
  letter-spacing: 0.5px;
  line-height: 24px;
}

.contact-container form {
  width: 450px;
  max-width: 100%;
}

.contact-container .wrapper {
  position: relative;
  margin: 10px 0;
  height: 44px;
  width: 100%;
}

.contact-container .wrapper-big {
  height: 80px;
}

.contact-container input,
.contact-container textarea {
  border: none;
  border-radius: 4px;
  font-family: "Muli";
  font-size: 14px;
  padding: 12px;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  height: 100%;
  width: 100%;
  z-index: 10;
}

.contact-container input:focus,
.contact-container textarea:focus {
  outline: 0;
}

.contact-container input:focus + .gradient-bg,
.contact-container textarea:focus + .gradient-bg {
  background: linear-gradient(
    to right,
    var(--color-pink-1),
    var(--color-pink-2)
  );
}

.contact-container .gradient-bg {
  background: #999;
  border-radius: 4px;
  position: absolute;
  top: -1px;
  left: -1px;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  z-index: 9;
}

@media screen and (max-width: 600px) {
  .contact-container {
    padding: 20px 30px;
  }
}

/*  */
#contact {
  min-height: 100vh;
  background-color: black;
  color: white;
  background-image: url("https://i.postimg.cc/PryV2kcW/wallpaperbetter-com-1920x1080.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.btn {
  background-color: rgb(0, 0, 0);
  height: 40px;
  width: 202px;
  color: rgb(223, 4, 4);
  font-weight: bold;
}

span {
  color: #0d6efd;
}

#img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

@media screen and (max-width: 992px) {
  img {
    width: 280px;
  }
}
</style>
