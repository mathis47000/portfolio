<script>
  import { Carousel } from "flowbite-svelte";
  // list of only internet banner links for java, angular, websocket, socket.io, maven, android, flutter, storage
  const images = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      alt: "Java",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      alt: "Angular",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
      alt: "Socket.io",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg",
      alt: "Maven",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
      alt: "Android",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      alt: "Flutter",
    },
  ];
</script>

<Carousel
  {images}
  duration={2000}
  autoplay={true}
  imgClass="object-contain h-48 w-fit rounded-xs"
/>

<style>
  h2 {
    text-decoration: none !important;
  }
</style>
