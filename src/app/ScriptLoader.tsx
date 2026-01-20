'use client'

import { useEffect } from 'react'

export default function ScriptLoader() {
  useEffect(() => {
    // Function to load a script and return a promise
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        // Check if script is already loaded
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve()
          return
        }

        const script = document.createElement('script')
        script.src = src
        script.async = false // Load in order
        script.onload = () => resolve()
        script.onerror = () => reject(new Error(`Failed to load: ${src}`))
        document.body.appendChild(script)
      })
    }

    const initializeScripts = async () => {
      try {
        // Load jQuery first - all other scripts depend on it
        await loadScript('/assets/js/jquery-3.7.1.min.js')

        // Wait for jQuery to be available
        await new Promise<void>((resolve) => {
          const checkJQuery = () => {
            if ((window as any).jQuery) {
              resolve()
            } else {
              setTimeout(checkJQuery, 50)
            }
          }
          checkJQuery()
        })

        const $ = (window as any).jQuery

        // Load scripts sequentially in the correct order
        // Core libraries first
        await loadScript('/assets/js/bootstrap.bundle.min.js')
        await loadScript('/assets/js/gsap.min.js')

        // GSAP plugins (depend on gsap)
        await loadScript('/assets/js/ScrollTrigger.min.js')
        await loadScript('/assets/js/ScrollSmoother.min.js')
        await loadScript('/assets/js/split-type.min.js')
        await loadScript('/assets/js/SplitText.min.js')

        // jQuery plugins (depend on jQuery)
        await loadScript('/assets/js/viewport.jquery.js')
        await loadScript('/assets/js/jquery.nice-select.min.js')
        await loadScript('/assets/js/jquery.waypoints.js')
        await loadScript('/assets/js/jquery.counterup.min.js')
        await loadScript('/assets/js/swiper-bundle.min.js')
        await loadScript('/assets/js/jquery.meanmenu.min.js')
        await loadScript('/assets/js/jquery.magnific-popup.min.js')
        await loadScript('/assets/js/wow.min.js')

        // Main.js last - depends on all above
        await loadScript('/assets/js/main.js')

        // Hide preloader after all scripts loaded
        if ($) {
          $(".preloader").addClass('loaded')
          $(".preloader").delay(600).fadeOut()
        }

      } catch (error) {
        console.error('Error loading scripts:', error)
        // Fallback: hide preloader even if scripts fail
        hidePreloader()
      }
    }

    const hidePreloader = () => {
      const preloader = document.querySelector('.preloader') as HTMLElement
      if (preloader) {
        preloader.classList.add('loaded')
        preloader.style.opacity = '0'
        preloader.style.visibility = 'hidden'
        preloader.style.pointerEvents = 'none'
        setTimeout(() => {
          preloader.style.display = 'none'
        }, 800)
      }
    }

    initializeScripts()

    // Fallback timeout to hide preloader after 3 seconds
    const fallbackTimeout = setTimeout(() => {
      console.log('Fallback: hiding preloader after timeout')
      hidePreloader()
    }, 3000)

    return () => clearTimeout(fallbackTimeout)
  }, [])

  return null
}
