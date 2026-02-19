<script lang="ts">
  import {
    Navbar,
    NavbarBrand,
    Container,
    Button
  } from '@sveltestrap/sveltestrap';

  export let brand = 'Game Showcase';
  export let brandHref = '/';
</script>

<Navbar class="navbar-dark bg-dark sticky-top shadow-sm">
  <Container class="d-flex justify-content-between align-items-center">
    <!-- Logo -->
    <NavbarBrand href={brandHref}>
      {brand}
    </NavbarBrand>

    <!-- Bottone Docs -->
    <Button color="primary" class="d-flex align-items-center gap-2">
      <i class="bi bi-journal-text"></i>
      ThinkEngine Docs
    </Button>
  </Container>
</Navbar>
