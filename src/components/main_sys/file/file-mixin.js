export default {
  data () {
    return {
      isClicked: false
    };
  },
  props: ['title'],
  methods: {
    selfEmit (event) {
      this.$emit(event, this);
    },
    changeState (to) {
      this.isClicked = to;
    },
    start () {
      
    }
  }
};
