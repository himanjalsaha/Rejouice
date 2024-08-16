var page1Content=document.querySelector("#page1-content")
var cursor = document.querySelector("#cursor")
page1Content.addEventListener("mousemove",function(dets){
//    cursor.style.left = dets.x+"px"
//    cursor.style.top=dets.y+"px"
gsap.to(cursor,{
    x:dets.x,
    y:dets.y
})
    
})

page1Content.addEventListener("mouseenter",function(dets){
    //    cursor.style.left = dets.x+"px"
    //    cursor.style.top=dets.y+"px"
    gsap.to(cursor,{
        scale:1,
       opacity:1
    })
        
    })

    page1Content.addEventListener("mouseleave",function(dets){
        //    cursor.style.left = dets.x+"px"
        //    cursor.style.top=dets.y+"px"
        gsap.to(cursor,{
            scale:0,
          opacity:0
        })
            
        })

        

        var page4Content = document.querySelector("#page4-content");
        var cursor = document.querySelector("#cursor");
        
        // Handle mousemove event for page4
        page4Content.addEventListener("mousemove", function(dets) {
            gsap.to(cursor, {
                x: dets.x,
                y: dets.y
            });
        });
        
        // Handle mouseenter event for page4
        page4Content.addEventListener("mouseenter", function(dets) {
            gsap.to(cursor, {
                scale: 1,
                opacity: 1
            });
        });
        
        // Handle mouseleave event for page4
        page4Content.addEventListener("mouseleave", function(dets) {
            gsap.to(cursor, {
                scale: 0,
                opacity: 0
            });
        });
          

        document.addEventListener('DOMContentLoaded', function() {
            gsap.registerPlugin(ScrollTrigger);
        
            gsap.fromTo("#page2-content p", 
                { 
                    opacity: 0, 
                    y: 50, 
                    scale: 0 
                }, 
                { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1, 
                    duration: 0.2, 
                    ease: "power6.out",
                    scrollTrigger: {
                        trigger: "#page2-content",
                        start: "top 80%", // Start the animation when #page2-content is in view
                        onEnter: () => {
                            gsap.fromTo("#page2-content p", 
                                { opacity: 0, y: 50, scale: 0 }, 
                                { opacity: 1, y: 0, scale: 1, duration: 2.0, ease: "power4.out" }
                            );
                        },
                      
                    }
                }
            );
        });
        

        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            autoplay: {
                delay: 0,  // Delay between slides in milliseconds (2500ms = 2.5s)
                disableOnInteraction: false,  // Keep autoplay running after user interaction
            },
            speed: 4000,  // Speed of the transition between slides (in milliseconds)
        });
        

        var tl = gsap.timeline()
        tl.from("#loader h3",{
            x:200,
            opacity:0,
            duration:1,
            stagger:0.1
        })

        tl.to("#loader h3",{
            opacity:0,
            x:-40,
            duration:1,
            stagger:0.1
        }
        )

        tl.to("#loader",{
            opacity:0
        })

        tl.to("#loader",{
           display:"none"
        })


        tl.from("#page1-content h1 span",{
            y:100,
            opacity:0,
            stagger:0.1,
            duration:0.5,
            delay:-0.5
        })