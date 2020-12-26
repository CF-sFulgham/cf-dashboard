<script>
export default {
  components: {
  },
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false
    },
  },
  data() {
    return {
      
    }
  },
}
</script>

<template>
  <div class="dropdown-menu" :class="{ 'show': show }" style="position: absolute; transform: translate3d(0px, 40px, 0px); top: 0px; left: 0px; will-change: transform;">
    <div class="dropdown-menu-header">
        <h6 class="dropdown-menu-title">Notifications</h6>
        <div>
        <span class="link">Mark All as Read</span>
        <span href="">Settings</span>
        </div>
    </div><!-- dropdown-menu-header -->
    <div class="dropdown-list">
        <!-- loop starts here -->
        <span href="" class="dropdown-link">
        <div class="media">
            <img src="http://via.placeholder.com/500x500" alt="">
            <div class="media-body">
            <p><strong>Suzzeth Bungaos</strong> tagged you and 18 others in a post.</p>
            <span>October 03, 2017 8:45am</span>
            </div>
        </div><!-- media -->
        </span>
        <!-- loop ends here -->
        <span href="" class="dropdown-link">
        <div class="media">
            <img src="http://via.placeholder.com/500x500" alt="">
            <div class="media-body">
            <p><strong>Mellisa Brown</strong> appreciated your work <strong>The Social Network</strong></p>
            <span>October 02, 2017 12:44am</span>
            </div>
        </div><!-- media -->
        </span>
        <span href="" class="dropdown-link read">
        <div class="media">
            <img src="http://via.placeholder.com/500x500" alt="">
            <div class="media-body">
            <p>20+ new items added are for sale in your <strong>Sale Group</strong></p>
            <span>October 01, 2017 10:20pm</span>
            </div>
        </div><!-- media -->
        </span>
        <span href="" class="dropdown-link read">
        <div class="media">
            <img src="http://via.placeholder.com/500x500" alt="">
            <div class="media-body">
            <p><strong>Julius Erving</strong> wants to connect with you on your conversation with <strong>Ronnie Mara</strong></p>
            <span>October 01, 2017 6:08pm</span>
            </div>
        </div><!-- media -->
        </span>
        <div class="dropdown-list-footer">
        <span href="page-notifications.html"><i class="fa fa-angle-down"></i> Show All Notifications</span>
        </div>
    </div><!-- dropdown-list -->
  </div><!-- dropdown-menu-right -->
</template>

<style lang="scss" scoped>
</style>