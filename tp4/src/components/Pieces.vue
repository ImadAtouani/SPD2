<template>
  <main>
    <!-- Menu de recherche -->
    <section class="filtres">
      <h3>Filtres</h3>
      <input type="text" v-model="searchQuery" placeholder="Rechercher une pièce...">
      <select v-model="selectedCategory">
        <option value="">Toutes les catégories</option>
        <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
      </select>
      <label>
        Afficher seulement les pièces disponibles <input type="checkbox" v-model="showAvailableOnly">
      </label>
      <label>
        Trier par prix :
        <select v-model="sortOrder">
          <option value="asc">Croissant</option>
          <option value="desc">Décroissant</option>
        </select>
      </label>
    </section>

    <!-- Fiches produits -->
    <section class="fiches">
      <div v-if="filteredPieces.length > 0">
        <div v-for="piece in filteredPieces" :key="piece.id" class="fiche">
          <img :src="piece.image" :alt="piece.nom">
          <h3>{{ piece.nom }}</h3>
          <p>{{ piece.prix }} €</p>
          <p>{{ piece.categorie }}</p>
          <p v-if="piece.disponible" class="disponible">Disponible</p>
          <p v-else class="indisponible">Indisponible</p>
          <button @click="addToCart(piece)" :disabled="!piece.disponible">Ajouter au panier</button>
        </div>
      </div>
      <div v-else class="no-results">
        <p>Aucune pièce ne correspond à vos critères de recherche.</p>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'PiecesComponent',
  data() {
    return {
      pieces: [], // Les pièces chargées depuis le fichier JSON
      searchQuery: '', // Texte de recherche
      selectedCategory: '', // Catégorie sélectionnée
      showAvailableOnly: false, // Afficher seulement les pièces disponibles
      sortOrder: 'asc', // Ordre de tri (asc ou desc)
      cart: [] // Panier
    };
  },
  computed: {
    filteredPieces() {
      let filtered = this.pieces;

      // Filtrage par recherche
      if (this.searchQuery) {
        filtered = filtered.filter(piece =>
          piece.nom.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }

      // Filtrage par catégorie
      if (this.selectedCategory) {
        filtered = filtered.filter(piece =>
          piece.categorie === this.selectedCategory
        );
      }

      // Filtrage par disponibilité
      if (this.showAvailableOnly) {
        filtered = filtered.filter(piece => piece.disponible);
      }

      // Tri par prix
      if (this.sortOrder === 'asc') {
        filtered.sort((a, b) => a.prix - b.prix);
      } else {
        filtered.sort((a, b) => b.prix - a.prix);
      }

      return filtered;
    },
    // Liste des catégories uniques
    categories() {
      const categories = new Set(this.pieces.map(piece => piece.categorie));
      return Array.from(categories);
    }
  },
  methods: {
    addToCart(piece) {
      this.cart.push(piece);
      alert(`${piece.nom} a été ajouté au panier !`);
    }
  },
  async mounted() {
    // Charger les pièces depuis le fichier JSON
    const response = await fetch('/pieces-autos.json');
    this.pieces = await response.json();
  }
};
</script>

<style scoped>
@import '../styles.css';
</style>