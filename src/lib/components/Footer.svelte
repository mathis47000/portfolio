<script>
  import {
    Footer,
    FooterCopyright,
    FooterLinkGroup,
    FooterLink,
    FooterBrand,
    FooterIcon,
  } from "flowbite-svelte";
  import {
    GithubSolid,
    InstagramSolid,
    LinkedinSolid,
    TwitterSolid,
  } from "flowbite-svelte-icons";
</script>

<Footer footerType="socialmedia" class="opacity-80 bg-white">
  <hr class="my-6 border-gray-400 sm:mx-auto" />

  <div class="sm:flex sm:items-center sm:justify-between px-6 pb-6">
    <FooterCopyright
      href="/"
      by="Mathis Bescond"
      year={new Date().getFullYear()}
    />

    <!-- Icônes de réseaux sociaux -->
    <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
      <FooterIcon href="https://github.com/mathis47000">
        <GithubSolid class="w-5 h-5 hover:text-gray-300" />
      </FooterIcon>
      <FooterIcon href="https://linkedin.com/in/mathisbescond">
        <LinkedinSolid class="w-5 h-5 hover:text-gray-300" />
      </FooterIcon>
      <FooterIcon href="https://instagram.com/mathisbescond">
        <InstagramSolid class="w-5 h-5 hover:text-gray-300" />
      </FooterIcon>
    </div>
  </div>
</Footer>
