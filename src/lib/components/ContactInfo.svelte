<script lang="ts">
	import { PrismicImage } from '@prismicio/svelte'

  export let image: string
	export let name: string
	export let role: string
  export let phone: string
  export let email: string

	let buttonText = 'Request proposal'
</script>

<div class="avatar">
  <div class="avatar-info">
    <div class="name-and-details">
       <div class="image">
          <div class="second">
            <PrismicImage field={image} />
          </div>
        </div>
      <div class="contact-details">
        <!-- <div class="name-and-role">
          <div class="name">{name}</div>
          <div class="role">{role}</div>
        </div> -->
        <div class="name">Reach out to {name}:</div>
        <div class="phone-and-email">
          <a href="tel:{phone}" class="phone">{phone} 
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 19L21 12L14 5" stroke="black" stroke-miterlimit="10"></path>
              <path d="M21 12H2" stroke="black" stroke-miterlimit="10"></path>
              </svg>
          </a>
          <a href="mailto:{email}">
            {email}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 19L21 12L14 5" stroke="black" stroke-miterlimit="10"></path>
            <path d="M21 12H2" stroke="black" stroke-miterlimit="10"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
/* .avatar{
  padding: 8px 24px;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(14, 79, 99, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
} */

.avatar-info{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.avatar-info .image{
  width: 56px;
  height: 56px;
  /* border-radius: 50%; */
  border-radius: 8px;
  overflow: hidden;
}

.images-and-title{
  display: flex;
  align-items: center;
  gap: 4px;
}

.name-and-details{
  display: flex;
  align-items: center;
  gap: 8px;
}

.phone-and-email{
  display: flex;
  gap: 4px;
}

.phone-and-email a{
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--color-aqua);
  text-decoration: none;
}

.phone-and-email svg{
  transform: rotate(-45deg);
}
</style>