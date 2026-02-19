<script lang="ts">
  import { Container, Row, Col } from '@sveltestrap/sveltestrap';

  export let githubUrl = 'https://github.com/tuo-username/tuo-repo';
</script>

<footer class="bg-dark border-top border-secondary mt-5 py-3">
  <Container>
    <Row class="align-items-center">
      <!-- Colonna sinistra -->
      <Col class="d-flex align-items-center gap-2 text-light small">
        <img
          src="/images/demacs-logo.png"
          alt="DeMaCS Logo"
          style="height: 24px; width: auto;"
        />
        <span>DeMaCS, Dept. of Mathematics and Computer Science - UNICAL</span>
      </Col>

      <!-- Colonna destra -->
      <Col class="text-end">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="text-light fs-4"
        >
          <i class="bi bi-github"></i>
        </a>
      </Col>
    </Row>
  </Container>
</footer>
