import { defineStore } from 'pinia'
import axios from 'axios'
import type { Rocket } from '@/types/rocket'

export const useRocketStore = defineStore('rocket', {
  state: () => ({
    rockets: [] as Rocket[],
    loading: false,
    error: null as string | null
  }),

  actions: {
    async fetchRockets() {
      this.loading = true
      this.error = null

      try {
        const res = await axios.get<RocketAPIResponse[]>(
          'https://api.spacexdata.com/v4/rockets'
        )

        this.rockets = res.data.map((r) => ({
          id: r.id,
          name: r.name,
          description: r.description,
          image: r.flickr_images[0] ?? '',
          cost: r.cost_per_launch,
          country: r.country,
          first_flight: r.first_flight
        }))
      } catch (err) {
        this.error = 'Failed to fetch rockets'
      } finally {
        this.loading = false
      }
    },

    addRocket(rocket: Omit<Rocket, 'id'>) {
      const newRocket: Rocket = {
        ...rocket,
        id: Date.now().toString()
      }
      this.rockets.push(newRocket)
    }
  }
})

// ✨ Type untuk API response mentah dari SpaceX
interface RocketAPIResponse {
  id: string
  name: string
  description: string
  flickr_images: string[]
  cost_per_launch: number
  country: string
  first_flight: string
}
