//Patrón de callback
let foo = () => {

    let divWrapper = document.createElement("div")
    divWrapper.classList.add("custom-wrapper")
    //console.log(divWrapper)

    /*crearArrImg().forEach(elem => {
        let divWrapElem = document.createElement("div")
        divWrapElem.classList.add("wrap-element")

        let divWrapView = document.createElement("div")
        divWrapView.classList.add("view", "overlay", "z-depth-1-half")

        let imgWrap = document.createElement("img")
        imgWrap.src = "images/" + elem

        let linkWrap = document.createElement("a")
        linkWrap.href = ""

        let divMask = document.createElement("div")
        divMask.classList.add("mask", "rgba-white-slight")

        linkWrap.appendChild(divMask)

        divWrapView.appendChild(imgWrap)
        divWrapView.appendChild(linkWrap)

        divWrapElem.appendChild(divWrapView)
        //console.log(divWrapElem)
        divWrapper.appendChild(divWrapElem)
    })*/



    function createE(a, p, c, e, parent, sibling) {

        let newE = document.createElement(a)
        pArr = Object.entries(p)
        eArr = Object.entries(e)
        if (pArr.length > 0) {
            pArr.forEach(i => {
                newE.setAttribute(i[0], i[1])

            })
        }
        if (c.length > 0) { c.forEach(i => { newE.classList.add(i) }) }

        if (eArr.length > 0) {
            eArr.forEach(i => {
                addEventListener(i[0], i[1])
            })
        }


        if (parent) {
            let newParentE = parent.appendChild(newE)
            return newParentE

        } else if (sibling) {
            let newSiblingE = sibling.parentNode.appendChild(newE)
            return newSiblingE
        } else {
            return newE
        }
    }



    


    crearArrImg().forEach(elem => {

        let imgWrap = document.createElement("img")
        imgWrap.src = "images/" + elem

        createE("div", {}, ["mask", "rgba-white-sligth"], {}, createE(
            "a", {}, [], {}, null, createE(
                "img", {"src":"images/" + elem}, [], {}, createE(
                    "div", {}, ["view", "overlay", "z-depth-1-half", "img-hover-zoom"], {
                        "click": (l)=>{
                            l.bubbles = true
                            console.log(l.target)
                            
                        }
                    }, createE(
                        "div", {}, ["wrap-element"], {}, divWrapper
                    )
                )
            )
        )
        )
    })
    document.querySelector("#examples").appendChild(divWrapper)
    //console.log(divWrapper)

    let divCarouselInner = document.createElement("div")
    divCarouselInner.classList.add("carousel-inner")
    divCarouselInner.role="listbox"

    
    crearArrImg().forEach((elem, index) => {
        if(index==0){
            
            createE("img",{"src":"images/" + elem, "alt":"slide"},["d-block", "h-50", "image-fluid"],{},createE(
                "div", {}, ["carousel-item", "justify-content-inherit",  "active"], {}, divCarouselInner
                ))
            
        }else{
            createE("img",{"src":"images/" + elem, "alt":"slide"},["d-block", "h-50" , "image-fluid"],{},createE(
                "div", {}, ["carousel-item", "justify-content-inherit"], {}, divCarouselInner
                ))
        }

    })
    console.log(divCarouselInner)

    document.querySelector("#carousel-example-1z").appendChild(divCarouselInner)






/*
<div class="carousel-item active">
  <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg" alt="First slide">
div>
*/


    zoom = () => { }
    iluminar = () => { }
    carga = () => { }
    selecciona = (e) => { }


 

    /*Recibe
    * pn : Parent name => String
    * pc : Parent class => String []
    * cn : Childs name => String []
    * cc : Childs Class => Object {cc1, cc2, ... , ccn}
    *      donde ccn => String[]
    *      
    */
    /*<div class="wrap-element">
            <div class="view overlay z-depth-1-half">
              <img src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg" class="img-fluid">
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
                */

    /*imgBlock.classList = "img-postre"

    imgBlock.addEventListener("mouseenter", (e) => {
        e.target.classList.add("zoomin")
    })
    imgBlock.addEventListener("mouseleave", (e) => {
        e.target.classList.remove("zoomin")


    })*/



    function crearArrImg() {
        const arrImg = [];
        for (let index = 1; index <= 41; index++) {

            arrImg.push("p" + index + ".jpeg");


        }
        return arrImg
    }


}
foo()