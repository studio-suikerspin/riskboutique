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
    <div class="images">
      <div class="first">
        <img src="/risk-gradient-beeldmerk.png" />
      </div>
      <div class="second">
        <PrismicImage field={image} />
      </div>
    </div>
    <div class="contact-details">
      <div class="name-and-role">
        <div class="name">{name}</div>
        <div class="role">{role}</div>
      </div>
      <div class="phone-and-email">
        <a href="tel:{phone}" class="phone">{phone}</a>
        <a href="mailto:{email}">{email}</a>
      </div>
    </div>
  </div>
</div>

<style>
.avatar{
  padding: 8px 24px;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-info{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.avatar-info .images{
  display: flex;
  position: relative;
  width: 98px;
  height: 56px;
}

.avatar-info .images .first{
  width: 56px;
  height: 56px;
  border-radius: 100%;
  overflow: hidden;
  position: absolute;
  left: 0;
  z-index: 1;
}

.avatar-info .images .second{
  width: 56px;
  height: 56px;
  border-radius: 100%;
  overflow: hidden;
  position: absolute;
  right: 0;
  z-index: 2;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.avatar:hover .images .second{
  right: 42px;
  transform: scale(1.05);
}

.contact-details{
  display: flex;
  gap: 48px;
}

.name-and-role{
  display: flex;
  flex-direction: column;
  /* gap: 4px; */
}

.name-and-role .name{
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-aqua);
}

.name-and-role .role{
  font-size: 0.875rem;
  color: var(--color-dark-mode);
}

.phone-and-email{
  display: flex;
  flex-direction: column;
  /* gap: 4px; */
}
</style>