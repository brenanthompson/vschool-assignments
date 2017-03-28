angular.module("myApp")

	.service('pokeService', function () {

		this.pokemon = [];

		var self = this;

		this.addPokemon = function (pokeName) {
			self.pokemon.push(pokeName)
			console.log(self.pokemon)
			return self.pokemon;

		}

		this.removePokemon = function (pokeName) {
			for (i = 0; i < self.pokemon.length; i++) {
				if (pokeName === self.pokemon[i]) {
					self.pokemon.splice(i, 1)
					console.log(pokeName);
					console.log(self.pokemon);
				}
			}
		}

	})
