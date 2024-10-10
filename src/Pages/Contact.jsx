function Contact() {
    return <div>
        <h1>This is countact</h1>
        <section class="py-12">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <form action="#" method="POST" class="space-y-6">
          <div>
            <label for="name" class="block text-gray-700">Name</label>
            <input type="text" id="name" name="name" required class="w-full p-2 border border-gray-300 rounded mt-1" />
            
          </div>
          <div>
            <label for="email" class="block text-gray-700">Email</label>
            <input type="text" id="name" name="name" required class="w-full p-2 border border-gray-300 rounded mt-1" />
          </div>
          <div>
            <label for="message" class="block text-gray-700">Message</label>
            <textarea id="message" name="message" required class="w-full p-2 border border-gray-300 rounded mt-1"></textarea>
          </div>
          <div class="text-center">
            <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  </section>    </div>
}
export default Contact