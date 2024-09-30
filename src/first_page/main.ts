import { Network } from '@capacitor/network'
import { App } from '@capacitor/app'

window.addEventListener('DOMContentLoaded', async () => {
  const status = await Network.getStatus()

  if (status.connected) {
    goToSite()
  } else {
    const header = document.querySelector('[data-header]')
    if (header) header.textContent = 'Отсутствует подключение к интернету'

    Network.addListener('networkStatusChange', status => {
      if (status.connected) goToSite()
    })
  }
})

async function goToSite () {
  const launchUrl = await App.getLaunchUrl()
  const path = launchUrl?.url.split('example.com').pop() || ''

  window.location.replace(`${import.meta.env.VITE_BASE_URL}${path}`)
}
