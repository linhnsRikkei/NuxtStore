export default function(context) {
  if (!context.store.getters['Auth/isAuthenticated']) {
    context.$toast.error('Vui long dang nhap')
    context.redirect('/')
  }
}
