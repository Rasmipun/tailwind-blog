
const AboutUs = () => {
  return (
    <div className="pt-10 text-white">
        <hr className="mx-12"/>
        <div className="grid grid-cols-3 pb-10">
          <div>
        <h1 className="text-2xl font-semibold pt-10 pl-14">
        Rasmi's Blog
        </h1>
        <p className="text-lg pt-3 pl-14">Thankyou for share your idea</p>
        </div>
        <div className="pt-8 ">
          <p className="text-2xl font-semibold pl-44">Follow us</p>
          <div className="flex cursor-pointer pt-1">
            <a href="https://www.facebook.com/prisma.poon">
          <img className="w-11 h-11 ml-36 mt-4"  src="https://www.facebook.com/images/fb_icon_325x325.png" alt="Facebook Logo" title="Facebook" />
          </a>
          <a href="https://www.instagram.com/racccsssmmmiiiii/?next=%2F"></a>
          <img className="w-11 h-11 ml-4 mt-4 rounded-2xl"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagram Logo" title="Instagram" />
          <a href="https://github.com/Rasmipun">
          <img className="w-11 h-11 ml-4 mt-4 rounded-2xl" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Github logo" title="Github" />
          </a>
        </div>
        </div>

        <div className="grid grid-rows-3 pt-8 ml-40 font-semibold text-xl cursor-pointer pb-4">
          <a href="About.jsx">
            About
          </a><br/>
          <a href="Blog.jsx">
            Blog
          </a> <br/>
          <a href="Contact.jsx">
            Contact
          </a> 
        </div>
    </div>
  </div>
  )

};
export default AboutUs;