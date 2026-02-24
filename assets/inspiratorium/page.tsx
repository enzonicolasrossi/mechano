'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ImageViewer } from '@/components/image-viewer'
import { CategorySelector } from '@/components/category-selector'
import { SettingsPanel } from '@/components/settings-panel'
import { ThemeProvider } from '@/components/theme-provider'
import { Tutorial } from '@/components/tutorial'
import { useAppStore } from '@/lib/store'
import { cn } from '@/lib/utils'

export default function Home() {
  const { isFullscreen } = useAppStore()

  return (
    <ThemeProvider>
      <div
        className={cn(
          'min-h-screen flex flex-col',
          isFullscreen && 'overflow-hidden'
        )}
      >
        <Header />
        <ImageViewer />
        <Footer />
        <CategorySelector />
        <SettingsPanel />
        <Tutorial />
      </div>
    </ThemeProvider>
  )
}
