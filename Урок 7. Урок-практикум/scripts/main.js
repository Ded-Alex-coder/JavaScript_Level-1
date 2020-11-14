class Product {
   name = ''
   price = 0
   img = ''
   count = 1

   constructor(name, price, img) {
      this.name = name
      this.price = price
      this.img = img
   }

   inc() {
      this.count++
   }

   dec() {
      this.count--
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
      <img src="${img}" alt="Pictures">

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

   getMinusBtn() {
      const btn = document.createElement('div')
      btn.classList.add('btn')
      btn.innerHTML = '-'

      btn.addEventListener('click', () => {
         const CartInstance = new Cart()
         CartInstance.remove(this)
         console.log(CartInstance)
      })

      return btn
   }

   getPlusBtn() {
      const btn = document.createElement('div')
      btn.classList.add('btn')
      btn.innerHTML = '+'

      btn.addEventListener('click', () => {
         const CartInstance = new Cart()
         CartInstance.add(this)
         console.log(CartInstance)
      })

      return btn
   }


   getCartTemplate() {
      const { name, price, count, img } = this
      const wrapper = document.createElement('div')
      wrapper.classList.add('shopUnitCart')
      wrapper.innerHTML = `
      <img src="${img}" alt="Pictures">

                <div>
                    <span>${name}</span>
                </div>
                
                <div>
                    <span>${price} $ * ${count} = ${price * count} $</span>
                </div>                
    `
      const Count = document.createElement('div')
      Count.classList.add('count')
      wrapper.appendChild(Count)
      Count.appendChild(this.getMinusBtn())
      Count.appendChild(this.getPlusBtn())
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

   remove(item) {
      const exists = this.findGood(item)
      if (!exists) {
         return
      }

      if (exists.count > 1) {
         exists.dec()
      } else {
         this.items = this.items.filter(good => item.name !== good.name)
      }
      this.render()
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

      btn.addEventListener('click', () => {
         list.classList.toggle('prices-click')
      })

      block.appendChild(list)

      this.render()
   }

   getSumTemplate() {
      const sum = this.items.reduce((sum, good) => {
         return sum + good.price * good.count
      }, 0)

      const block = document.createElement('div')
      block.classList.add('cart__sum')
      block.innerHTML = `Суммарная цена: ${sum} $`

      return block
   }

   getEmptyTemplate() {
      const block = document.createElement('div')
      block.classList.add('cart__empty')
      block.innerHTML = `Нет выбранных товаров`

      return block
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

      if (this.items.length) {
         placeToRender.appendChild(this.getSumTemplate())
      } else {
         placeToRender.appendChild(this.getEmptyTemplate())
      }
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

const hts = new Product('hts', 100, 'images/goods/htc.jpg')
const iphone = new Product('iphone', 1000, 'images/goods/iphone.jpg')
const samsung = new Product('samsung', 500, 'images/goods/samsung.jpg')

const ListInstance = new List()
ListInstance.add(hts)
ListInstance.add(iphone)
ListInstance.add(samsung)
ListInstance.render()

const CartInstance = new Cart()