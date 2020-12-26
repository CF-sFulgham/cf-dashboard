<script>
import Content from '@viewLayouts/Content/content.vue'
import DetailsLayout from '@viewLayouts/Details/details.vue'

export default {
  data() {
    return {
      user: null,
    }
  },
  page: {
    title: 'Contact Us',
    meta: [{ name: 'description', content: 'Home page container.' }],
  },
  components: {
    Content,
    DetailsLayout,
  },
}
</script>

<template>
  <DetailsLayout>
    <Content>
    <div class="section-wrapper mg-t-10">
          <label class="section-title">Contact Us</label>
          <p class="mg-b-20 mg-sm-b-40">A form control with success, warning and error state.</p>

          <div class="row">
            <div class="col-lg">
              <div class="form-group has-success mg-b-0">
                <input class="form-control" placeholder="Input box (success state)" type="text">
                <textarea rows="3" class="form-control mg-t-20" placeholder="Textarea (success state)"></textarea>
              </div><!-- form-group -->
            </div><!-- col -->
          </div><!-- row -->
        </div>
    </Content>
  </DetailsLayout>
</template>
