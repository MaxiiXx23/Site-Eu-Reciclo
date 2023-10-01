import { Routes, Route } from 'react-router-dom'

import { Home } from '@/pages/Home'
import { DownloadApp } from '@/pages/DownloadApp'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { AboutUs } from '@/pages/AboutUs'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/baixe-o-app" element={<DownloadApp />} />
        <Route path="/quem-somos" element={<AboutUs />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Route>
    </Routes>
  )
}
