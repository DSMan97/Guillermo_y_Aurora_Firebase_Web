import LoginRegistro from '@/components/LoginRegistro'
import Perfiles from '@/components/Perfiles'
import { EventBus } from '../../Events/events_bus'

export default {
  name: 'Principal',
  components: {'loginregistro':LoginRegistro,
            'Perfiles':Perfiles },
  props: [],
  data () {
    return {
      blLoggedUser:this.props_blIsLoggedIn
    }
  },
  computed: {

  },
  mounted () {
    EventBus.$on('loginregistro_userstatechanged', blestado => {
      this.blLoggedUser=blestado
    });
  },
  methods: {

  }

}
