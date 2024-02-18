var vm = new Vue({
  el: "#app",
  data: {
    isCartOpen: false,
    lens: [
  {
    "name": "EF8-15mm f/4L Fisheye USM",
    "type": "變焦, 魚眼, EF系列",
    "cover": "https://tw.canon/media/migration/shared/live/products/EN/ef8-15mm-f4l-fisheye-b1.png",
    "description": "世界第一支同時提供『圓形』(Circular) 及『對角』(Diagonal) 魚眼效果的魚眼變焦鏡頭*。",
    "price": 37000,
    "open": false
  },
  {
    "name": "EF16-35mm f/4L IS USM",
    "type": "變焦, 超廣角, 防手震, EF系列",
    "cover": "https://tw.canon/media/migration/shared/live/products/EN/ef16-35mm-f4l-is-usm-b1.png",
    "description": "配備光學影像穩定器的專業超廣角變焦鏡頭，超廣角焦段加上4級防手震，在於昏暗環境下手持拍攝更為容易。",
    "price": 38300,
    "open": false
  },
  {
    "name": "EF24-70mm f/2.8L II USM",
    "type": "變焦, EF系列",
    "cover": "https://tw.canon/media/migration/shared/live/products/EN/ef24-70mm-f28l-ii-usm-b1.png",
    "description": "針對有更高要求的數位攝影而設計的第二代專業標準變焦鏡頭，鏡身設計更輕巧，加上變焦鎖及高度防污的氟塗膜，令鏡頭從結構以致拍攝使用時，更加可靠耐用。",
    "price": 56300,
    "open": false
  },
  {
    "name": "EF70-200mm f/2.8L IS III USM",
    "type": "變焦, 望遠, 防手震, EF系列",
    "cover": "https://tw.canon/media/image/2018/06/07/d9223c115e2a4918a777a185688a97b0_EF70-200mm+f2.8L+IS+III+USM_front_slant.png",
    "description": "加入ASC「空氣球體塗膜」(Air Sphere Coating) ，大幅抑制鬼影與眩光，即使於複雜光源環境下仍能發揮出色光學表現。",
    "price": 62000,
    "open": false
  }
],
    keyword: "",
    cart: [],
    currentLen: null
  },

  methods: {
    bgcss(url){
      return {'background-image': 'url('+url+')',
             'background-size': 'cover',
             'background-position': 'center center'}
    },
    wheel(evt){
      console.log(evt.deltaY)
      TweenMax.to(".cards",0.8,{
        left: "+="+evt.deltaY*(-3)+"px"
      })
    },
    addCart(len,evt){
      this.currentLen=len
      this.$nextTick(()=>{
        TweenMax.from(".buybox",0.8,{
          left: $(evt.target).offset().left,
          top: $(evt.target).offset().top,
          opacity: 1,
          ease: Power1.easeIn
        })
        setTimeout(()=>{
          this.cart.push(len)
        },800)
      })
      
    }
  },
  computed: {
    totalPrice(){
      return this.cart
        .map(len=>len.price)
        .reduce((total,p)=>total+p,0)
    }
  },
  watch: {
    cart(){
      TweenMax.from(".fa-shopping-cart",0.3,{
        scale: 0.5
      })
    }
  }
})