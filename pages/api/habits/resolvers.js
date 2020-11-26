export const habitsResolvers = {
  Query: {
    async habits() {
      console.log('habits')
      return [
        {
          _id: 'fakeArray',
          name: 'Make my bed'
        }
      ]
    }
  }
}