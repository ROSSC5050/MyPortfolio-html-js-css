function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  png/video000.png
  png/video001.png
  png/video002.png
  png/video003.png
  png/video004.png
  png/video005.png
  png/video006.png
  png/video007.png
  png/video008.png
  png/video009.png
  png/video010.png
  png/video011.png
  png/video012.png
  png/video013.png
  png/video014.png
  png/video015.png
  png/video016.png
  png/video017.png
  png/video018.png
  png/video019.png
  png/video020.png
  png/video021.png
  png/video022.png
  png/video023.png
  png/video024.png
  png/video025.png
  png/video026.png
  png/video027.png
  png/video028.png
  png/video029.png
  png/video030.png
  png/video031.png
  png/video032.png
  png/video033.png
  png/video034.png
  png/video035.png
  png/video036.png
  png/video037.png
  png/video038.png
  png/video039.png
  png/video040.png
  png/video041.png
  png/video042.png
  png/video043.png
  png/video044.png
  png/video045.png
  png/video046.png
  png/video047.png
  png/video048.png
  png/video049.png
  png/video050.png
  png/video051.png
  png/video052.png
  png/video053.png
  png/video054.png
  png/video055.png
  png/video056.png
  png/video057.png
  png/video058.png
  png/video059.png
  png/video060.png
  png/video061.png
  png/video062.png
  png/video063.png
  png/video064.png
  png/video065.png
  png/video066.png
  png/video067.png
  png/video068.png
  png/video069.png
  png/video070.png
  png/video071.png
  png/video072.png
  png/video073.png
  png/video074.png
  png/video075.png
  png/video076.png
  png/video077.png
  png/video078.png
  png/video079.png
  png/video080.png
  png/video081.png
  png/video082.png
  png/video083.png
  png/video084.png
  png/video085.png
  png/video086.png
  png/video087.png
  png/video088.png
  png/video089.png
  png/video090.png
  png/video091.png
  png/video092.png
  png/video093.png
  png/video094.png
  png/video095.png
  png/video096.png
  png/video097.png
  png/video098.png
  png/video099.png
  png/video100.png
  png/video101.png
  png/video102.png
  png/video103.png
  png/video104.png
  png/video105.png
  png/video106.png
  png/video107.png
  png/video108.png
  png/video109.png
  png/video110.png
  png/video111.png
  png/video112.png
  png/video113.png
  png/video114.png
  png/video115.png
  png/video116.png
  png/video117.png
  png/video118.png
  png/video119.png
  png/video120.png
  png/video121.png
  png/video122.png
  png/video123.png
  png/video124.png
  png/video125.png
  png/video126.png
  png/video127.png
  png/video128.png
  png/video129.png
  png/video130.png
  png/video131.png
  png/video132.png
  png/video133.png
  png/video134.png
  png/video135.png
  png/video136.png
  png/video137.png
  png/video138.png
  png/video139.png
  png/video140.png
  png/video141.png
  png/video142.png
  png/video143.png
  png/video144.png
  png/video145.png
  png/video146.png
  png/video147.png
  png/video148.png
  png/video149.png
  png/video150.png
  png/video151.png
  png/video152.png
  png/video153.png
  png/video154.png
  png/video155.png
  png/video156.png
  png/video157.png
  png/video158.png
  png/video159.png
  png/video160.png
  png/video161.png
  png/video162.png
  png/video163.png
  png/video164.png
  png/video165.png
  png/video166.png
  png/video167.png
  png/video168.png
  png/video169.png
  png/video170.png
  png/video171.png
  png/video172.png
  png/video173.png
  png/video174.png
  png/video175.png
  png/video176.png
  png/video177.png
  png/video178.png
  png/video179.png
  png/video180.png
  png/video181.png
  png/video182.png
  png/video183.png
  png/video184.png
  png/video185.png
  png/video186.png
  png/video187.png
  png/video188.png
  png/video189.png
  png/video190.png
  png/video191.png
  png/video192.png
  png/video193.png
  png/video194.png
  png/video195.png
  png/video196.png
  png/video197.png
  png/video198.png
  png/video199.png
  png/video200.png
  png/video201.png
  png/video202.png
  png/video203.png
  png/video204.png
  png/video205.png
  png/video206.png
  png/video207.png
  png/video208.png
  png/video209.png
  png/video210.png
  png/video211.png
  png/video212.png
  png/video213.png
  png/video214.png
  png/video215.png
  png/video216.png
  png/video217.png
  png/video218.png
  png/video219.png
  png/video220.png
  png/video221.png
  png/video222.png
  png/video223.png
  png/video224.png
  png/video225.png
  png/video226.png
  png/video227.png
  png/video228.png
  png/video229.png
  png/video230.png
  png/video231.png
  png/video232.png
  png/video233.png
  png/video234.png
  png/video235.png
  png/video236.png
  png/video237.png
  png/video238.png
  png/video239.png
  png/video240.png
  png/video241.png
  png/video242.png
  png/video243.png
  png/video244.png
  png/video245.png
  png/video246.png
  png/video247.png
  png/video248.png
  png/video249.png
  png/video250.png
  png/video251.png
  png/video252.png
  png/video253.png
  png/video254.png
  png/video255.png
  png/video256.png
  png/video257.png
  png/video258.png
  png/video259.png
  png/video260.png
  png/video261.png
  png/video262.png
  png/video263.png
  png/video264.png
  png/video265.png
  png/video266.png
  png/video267.png
  png/video268.png
  png/video269.png
  png/video270.png
  png/video271.png
  png/video272.png
  png/video273.png
  png/video274.png
  png/video275.png
  png/video276.png
  png/video277.png
  png/video278.png
  png/video279.png
  png/video280.png
  png/video281.png
  png/video282.png
  png/video283.png
  png/video284.png
  png/video285.png
  png/video286.png
  png/video287.png
  png/video288.png
  png/video289.png
  png/video290.png
  png/video291.png
  png/video292.png
  png/video293.png
  png/video294.png
  png/video295.png
  png/video296.png
  png/video297.png
  png/video298.png
  png/video299.png
  png/video300.png
  png/video301.png
  png/video302.png
  png/video303.png
  png/video304.png
  png/video305.png
  png/video306.png
  png/video307.png
  png/video308.png
  png/video309.png
  png/video310.png
  png/video311.png
  png/video312.png
  png/video313.png
  png/video314.png
  png/video315.png
  png/video316.png
  png/video317.png
  png/video318.png
  png/video319.png
  png/video320.png
  png/video321.png
  png/video322.png
  png/video323.png
  png/video324.png
  png/video325.png
  png/video326.png
  png/video327.png
  png/video328.png
  png/video329.png
  png/video330.png
  png/video331.png
  png/video332.png
  png/video333.png
  png/video334.png
  png/video335.png
  png/video336.png
  png/video337.png
  png/video338.png
  png/video339.png
  png/video340.png
  png/video341.png
  png/video342.png
  png/video343.png
  png/video344.png
  png/video345.png
  png/video346.png
  png/video347.png
  png/video348.png
  png/video349.png
  png/video350.png
  png/video351.png
  png/video352.png
  png/video353.png
  png/video354.png
  png/video355.png
  png/video356.png
  png/video357.png
  png/video358.png
  png/video359.png
  png/video360.png
  png/video361.png
  png/video362.png
  png/video363.png
  png/video364.png
  png/video365.png
  png/video366.png
  png/video367.png
  png/video368.png
  png/video369.png
  png/video370.png
  png/video371.png
  png/video372.png
  png/video373.png
  png/video374.png
  png/video375.png
  png/video376.png
  png/video377.png
  png/video378.png
  png/video379.png
  > 
 `;
  return data.split("\n")[index];
}

const frameCount = 464;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#page`,
  start: `top top`,
  end: `550% top`,
});


gsap.to("#page",{
  scrollTrigger:{
    trigger:`#page`,
    start:`top top`,
    end:`500% top`,
    pin:true,
    scroller:`#main`
  }
})

gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`200% top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`80% top`,
    pin:true,
    scroller:`#main`
  }
})

gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page4",{
  scrollTrigger:{
    trigger:`#page4`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})

gsap.to("#page5",{
  scrollTrigger:{
    trigger:`#page5`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})




const parallax_el=document.querySelectorAll(".parallax");
let xvalue=0,yvalue=0;
window.addEventListener("mousemove",(e) =>{
  xvalue=e.clientX - window.innerWidth/2;
  yvalue=e.clientY - window.innerHeight/2;
  parallax_el.forEach((el) =>{
    let speedx =el.dataset.speedx;
    let speedy =el.dataset.speedy;
    el.style.transform =`translateX(calc(-50% + ${-xvalue * speedx}px)) translateY(calc(-50% + ${yvalue * speedy}px))`;
  });
} );
const inputs= document.querySelectorAll(".contact-input");
inputs.forEach(ipt =>{
  ipt.addEventListener("focus",() =>{
    ipt.parentNode.classList.add("focus");
    ipt.parentNode.classList.add("not-empty");

  });
    ipt.addEventListener("blur",() =>{
      if(ipt.value == ""){
        ipt.parentNode.classList.remove("not-empty");
      }
      ipt.parentNode.classList.remove("focus");
    });
});