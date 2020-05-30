let Products = [{ratingRevievs: "264 отзыва", price: "499 грн", name: "GTA5", href: "gta5.html"}, {ratingRevievs: "1355 отзывов", price: "250 грн", name: "Witcher3", href: "witcher.html"}, {ratingRevievs: "426 отзывов", price: "750 грн", name: "Battlefield5", href: "Battlefield.html"}, {ratingRevievs: "403 отзыва", price: "150 грн", name: "Just Cause4", href: "Just Cause 4.html"}, {ratingRevievs: "488 отзывов", price: "899 грн", name: "Borderlands3", href: "borderlands 3.html"}, {ratingRevievs: "198 отзывов", price: "699 грн", name: "Dying Light2", href: "Dying light 2.html"}, {ratingRevievs: "352 отзыва", price:"455 грн", name: "Metro Exodus", href: "Metro Exodus.html"}, {ratingRevievs: "59 отзывов", price: "471 грн", name: "Divinity Original Sin 2", href: "Divinity Original Sin 2.html"}]
		let OBJArray = Products.slice();
		function equal(P1, P2)
		{
			let s = 3;
				let P1price = parseInt(((P1.price).slice(0, P1.price.length - s)).replace(' ', ''));
				let P2price = parseInt(((P2.price).slice(0, P2.price.length - s)).replace(' ', ''));
				if(P1price < P2price)
					return -1
				else if(P1price > P2price)
					return 1;
				else
					return 0;
		}