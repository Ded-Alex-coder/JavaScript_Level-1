class Product {
   name = ''
   price = 0
   img = ''
   count = 1

   constructor(name, price) {
      this.name = name
      this.price = price
   }

   inc() {
      this.count++
   }

   getAddInCartBtn() {
      const btn = document.createElement('button')
      btn.classList.add('shopUnitMore')
      btn.setAttribute('type', 'button')
      btn.innerHTML = 'Купить'

      btn.addEventListener('click', () => {
         const CartInstance = new Cart()
         CartInstance.add(this)
         console.log(CartInstance)
      })

      return btn
   }

   getListTemplate() {
      const { name, price, img } = this
      const wrapper = document.createElement('div')
      wrapper.classList.add('shopUnit')
      wrapper.innerHTML = `
      <img src="images/goods/iphone.jpg" alt="Pictures">

                <div class="shopUnitName">
                    <span>${name}</span>
                </div>
                <div class="shopUnitShortDesc">
                    Здесь будет немного текста описывающего продукт.
                    Здесь будет немного текста описывающего продукт.
                    Здесь будет немного текста описывающего продукт.
                </div>
                <div class="shopUnitPrice">
                    <span>${price} $</span>
                </div>
                
    `
      wrapper.appendChild(this.getAddInCartBtn())
      return wrapper
   }

   getCartTemplate() {
      const { name, price, img } = this
      const wrapper = document.createElement('div')
      wrapper.classList.add('shopUnitCart')
      wrapper.innerHTML = `
      <img src="images/goods/iphone.jpg" alt="Pictures">

                <div>
                    <span>${name}</span>
                </div>
                
                <div>
                    <span>${price} $</span>
                </div>
                
    `
      return wrapper
   }
}

class goodList {
   items = []

   constructor(items = []) {
      this.items = items
   }

   findGood(good) {
      return this.items.filter(item => item.name === good.name)[0]
   }

   add(item) {
      const exists = this.findGood(item)
      if (exists) {
         exists.inc()
      } else {
         this.items.push(item)
      }
      this.render()
   }

   render() {
   }

}


class Cart extends goodList {
   constructor(items) {
      if (Cart._instance) {
         return Cart._instance
      }

      super(items)
      this.init()

      Cart._instance = this
   }

   init() {
      const block = document.querySelector('.content')

      const Link = document.querySelector('#navWrap')
      const btn = document.createElement('a')
      btn.innerHTML = 'Корзина'
      btn.classList.add('link')
      Link.appendChild(btn)

      const list = document.createElement('div')
      list.classList.add('prices')
      list.innerText = 'Пусто'

      btn.addEventListener('click', () => {
         list.classList.toggle('prices-click')
      })

      block.appendChild(list)

      // const placeToRender = document.querySelector('.prices')
      // if (placeToRender) {
      //    placeToRender.appendChild(block)
      // }

   }

   render() {
      const placeToRender = document.querySelector('.prices')
      if (!placeToRender) {
         return
      }

      placeToRender.innerHTML = ''

      this.items.forEach(item => {
         const template = item.getCartTemplate()
         placeToRender.appendChild(template)
      })
   }
}


class List extends goodList {
   constructor(items) {
      super(items)
   }

   render() {
      const placeToRender = document.querySelector('#catal')
      if (!placeToRender) {
         return
      }

      placeToRender.innerHTML = ''

      this.items.forEach(item => {
         const template = item.getListTemplate()
         placeToRender.appendChild(template)
      })
   }
}

const hts = new Product('hts', 100)
const iphone = new Product('iphone', 1000)
const samsung = new Product('samsung', 500)

const ListInstance = new List()
ListInstance.add(hts)
ListInstance.add(iphone)
ListInstance.add(samsung)
ListInstance.render()
console.log(hts.getListTemplate())

const CartInstance = new Cart()