<script>
export default {}
</script>

<template>
  <div class="slim-footer">
    <div class="container">
      <div>
        <span>
            <span class="powered-by">Powered by</span>
          <img
            class="cfLogo"
            alt="logo"
            src="@assets/images/brand_logo_small.png" />
        </span>
        <div class="terms">
          <span>Terms of Use</span>
          <span class="bold"> | </span>
          <span>Privacy Policy</span>
          <span class="bold"> | </span>
          <span>&copy; 2021 CreationFoundation</span>
          <span class="bold"> | </span>
          <span>All Rights Reserved</span>
          <span class="bold"> | </span>
          <span>Blog</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.powered-by {
    position: relative;
    top: 15px;
    font-size: .9rem;
    color: #333;
}
.terms {
    font-size: .8rem;
    font-weight: 300;
    color: #333;
}
.bold {
    font-size: 1rem;
}
</style>