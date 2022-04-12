const staticDevEmployee = "dev-employee-site"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/images/headshot3.jpeg",
  "/images/headshot3.jpeg",
  "/images/headshot3.jpeg",
  "/images/headshot3.jpeg",
  "/images/headshot3.jpeg",
  "/images/headshot3.jpeg",
  "/images/headshot3.jpeg",
  "/images/headshot3.jpeg",
  "/images/headshot3.jpeg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevEmployee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })