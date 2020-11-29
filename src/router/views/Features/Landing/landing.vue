<script>
import Content from '@viewLayouts/Content/content.vue'
import DetailsLayout from '@viewLayouts/Details/details.vue'
import Greetings from './Components/greetings.vue'
import Metric1Title from './Components/metric1Title.vue'

export default {
  page: {
    title: 'Landing',
    meta: [{ name: 'description', content: 'Landing page' }],
  },
  components: { 
      Content,
      DetailsLayout,
      Greetings,
      Metric1Title,
  },
}
</script>

<template>
  <DetailsLayout>
      <Content>
<div class="container pd-t-30">
        <div class="dash-headline-two">
          <Greetings />
          <Metric1Title />  
        </div><!-- dash-headline-two -->

        <div class="nav-statistics-wrapper">
          <nav class="nav">
            <a href="" class="nav-link active">Overview</a>
            <a href="" class="nav-link">Employee</a>
            <a href="" class="nav-link">Products</a>
            <a href="" class="nav-link">Misc</a>
          </nav>
          <nav class="nav">
            <a href="" class="nav-link">Today</a>
            <a href="" class="nav-link active">This Week</a>
            <a href="" class="nav-link">This Month</a>
          </nav>
        </div><!-- nav-statistics-wrapper -->

        <div class="row row-statistics mg-b-30">
          <div class="col-md-5">
            <h1 class="tx-inverse tx-56 tx-lato tx-bold">34,100</h1>
            <h6 class="tx-15 tx-inverse tx-bold mg-b-20">Total hours spent (7 days)</h6>
            <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem</p>
            <p class="tx-12">
              <a href="">View Details</a>
              <a href="">Edit Settings</a>
            </p>
          </div><!-- col-5 -->
          <div class="col-md-7 mg-t-20 mg-md-t-0"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
            <canvas id="chartBar1" height="560" style="display: block; height: 280px; width: 635px;" width="1270" class="chartjs-render-monitor"></canvas>
          </div><!-- col-7 -->
        </div><!-- row -->

        <hr>

        <div class="report-summary-header">
          <div>
            <h4 class="tx-inverse mg-b-3">Overall Report Summary</h4>
            <p class="mg-b-0"><i class="icon ion-calendar mg-r-3"></i> January 01, 2018 - January 31, 2018</p>
          </div>
          <div>
            <a href="" class="btn btn-secondary"><i class="icon ion-ios-clock-outline tx-22"></i> Activity Logs</a>
            <a href="" class="btn btn-secondary"><i class="icon ion-ios-gear-outline tx-24"></i> Edit Settings</a>
          </div>
        </div><!-- d-flex -->

        <div class="row no-gutters dashboard-chart-one">
          <div class="col-md-4 col-lg">
            <div class="card card-total">
              <div>
                <h1>420</h1>
                <p>Total Employee</p>
              </div>
              <div>
                <div class="tx-24 mg-b-10 tx-center op-5">
                  <i class="icon ion-man tx-gray-600"></i>
                  <i class="icon ion-man tx-gray-600"></i>
                  <i class="icon ion-man tx-gray-600"></i>
                  <i class="icon ion-man tx-gray-600"></i>
                  <i class="icon ion-man tx-gray-600"></i>
                  <i class="icon ion-man tx-gray-600"></i>
                  <i class="icon ion-man tx-gray-400"></i>
                  <i class="icon ion-man tx-gray-400"></i>
                  <i class="icon ion-man tx-gray-400"></i>
                  <i class="icon ion-man tx-gray-400"></i>
                </div>
                <label>Female (66%)</label>
                <div class="progress mg-b-10">
                  <div class="progress-bar bg-primary progress-bar-xs wd-65p" role="progressbar" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                </div><!-- progress -->

                <label>Male (34%)</label>
                <div class="progress">
                  <div class="progress-bar bg-danger progress-bar-xs wd-35p" role="progressbar" aria-valuenow="34" aria-valuemin="0" aria-valuemax="100"></div>
                </div><!-- progress -->
              </div>
            </div><!-- card -->
          </div><!-- col -->
          <div class="col-md-4 col-lg">
            <div class="card card-total">
              <div>
                <h1>55</h1>
                <p>Total Products</p>
              </div>
              <div>
                <div class="tx-16 mg-b-15 tx-center op-5">
                  <i class="icon ion-cube tx-gray-600"></i>
                  <i class="icon ion-cube tx-gray-600"></i>
                  <i class="icon ion-cube tx-gray-600"></i>
                  <i class="icon ion-cube tx-gray-600"></i>
                  <i class="icon ion-cube tx-gray-600"></i>
                  <i class="icon ion-cube tx-gray-600"></i>
                  <i class="icon ion-cube tx-gray-600"></i>
                  <i class="icon ion-cube tx-gray-600"></i>
                  <i class="icon ion-cube tx-gray-400"></i>
                  <i class="icon ion-cube tx-gray-400"></i>
                </div>
                <label>Digital products (85%)</label>
                <div class="progress mg-b-10">
                  <div class="progress-bar bg-success progress-bar-xs wd-85p" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                </div><!-- progress -->

                <label>Non-digital products (15%)</label>
                <div class="progress">
                  <div class="progress-bar bg-warning progress-bar-xs wd-15p" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                </div><!-- progress -->
              </div>
            </div><!-- card -->
          </div><!-- col -->
          <div class="col-md-4 col-lg">
            <div class="card card-total">
              <div>
                <h1>30</h1>
                <p>Total Franchise</p>
              </div>
              <div>
                <div class="tx-22 mg-b-10 tx-center op-5">
                  <i class="icon ion-location tx-gray-600"></i>
                  <i class="icon ion-location tx-gray-600"></i>
                  <i class="icon ion-location tx-gray-600"></i>
                  <i class="icon ion-location tx-gray-600"></i>
                  <i class="icon ion-location tx-gray-600"></i>
                  <i class="icon ion-location tx-gray-600"></i>
                  <i class="icon ion-location tx-gray-600"></i>
                  <i class="icon ion-location tx-gray-400"></i>
                  <i class="icon ion-location tx-gray-400"></i>
                  <i class="icon ion-location tx-gray-400"></i>
                </div>
                <label>Local (75%)</label>
                <div class="progress mg-b-10">
                  <div class="progress-bar bg-purple progress-bar-xs wd-75p" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div><!-- progress -->

                <label>International (25%)</label>
                <div class="progress">
                  <div class="progress-bar bg-pink progress-bar-xs wd-25p" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div><!-- progress -->
              </div>
            </div><!-- card -->
          </div><!-- col -->
          <div class="col-md col-lg-4">
            <div class="card card-revenue">
              <h6>Monthly Revenue</h6>
              <p>Calculated every 15th of the month</p>
              <h1>$32,500 <span class="tx-success">1.4% up</span></h1>
              <div id="rs3" class="ht-50 ht-sm-70 mg-r--1 rickshaw_graph"><svg width="320" height="70"><path class="path" d="M0,41.12211221122112Q21.333333333333336,31.496149614961496,24.615384615384617,29.57095709570957C29.53846153846154,26.683168316831683,44.30769230769231,14.554455445544548,49.23076923076923,12.244224422442237S68.92307692307693,7.623762376237616,73.84615384615385,6.468646864686462S93.53846153846155,0.11551155115510858,98.46153846153847,0.6930693069306859S118.15384615384616,10.511551155115503,123.07692307692308,12.244224422442237S142.76923076923077,16.28712871287129,147.6923076923077,18.01980198019802S167.38461538461536,27.83828382838284,172.3076923076923,29.57095709570957S192,35.92409240924093,196.92307692307693,35.34653465346535S216.6153846153846,25.528052805280527,221.53846153846155,23.795379537953796S241.23076923076923,19.174917491749177,246.15384615384616,18.01980198019802S265.84615384615387,11.089108910891081,270.7692307692308,12.244224422442237S290.4615384615385,29.57095709570957,295.3846153846154,29.57095709570957Q298.6666666666667,29.57095709570957,320,12.244224422442237" fill="none" stroke="#1B84E7" stroke-width="2" opacity="1"></path><path class="stroke"></path></svg></div>
              <label>Last month: <span>$79,554</span></label>
            </div><!-- card -->
          </div><!-- col-4 -->
        </div><!-- row -->

        <hr>

        <div class="report-summary-header">
          <div>
            <h4 class="tx-inverse mg-b-3">Most Popular Products</h4>
            <p class="mg-b-0"><i class="icon ion-calendar mg-r-3"></i> January 01, 2018 - January 31, 2018</p>
          </div>
          <div>
            <a href="" class="btn btn-secondary">Top Rated Products</a>
            <a href="" class="btn btn-secondary">View All Products</a>
          </div>
        </div><!-- d-flex -->

        <div class="row row-sm">
          <div class="col-md-6 col-lg-4">
            <div class="card card-popular-product">
              <label class="prod-id">Product ID: #PD-1754</label>
              <h5 class="prod-name"><a href="">US 360 Home Security IP Camera Night</a></h5>
              <p class="prod-by">By: <a href="">ThmPxls Security</a></p>
              <div class="row">
                <div class="col-5">
                  <h1>1885</h1>
                  <p>Total Sales</p>
                </div><!-- col -->
                <div class="col-7">
                  <h1>$12,056</h1>
                  <p>Earnings</p>
                </div><!-- col -->
              </div><!-- row -->
            </div><!-- card -->
          </div><!-- col-4 -->
          <div class="col-md-6 col-lg-4 mg-t-20 mg-md-t-0">
            <div class="card card-popular-product">
              <label class="prod-id">Product ID: #PD-1753</label>
              <h5 class="prod-name"><a href="">US KS-5 Junior Lite DVD Karaoke 9500</a></h5>
              <p class="prod-by">By: <a href="">ThmPxls Security</a></p>
              <div class="row">
                <div class="col-5">
                  <h1>1862</h1>
                  <p>Total Sales</p>
                </div><!-- col -->
                <div class="col-7">
                  <h1>$13,113</h1>
                  <p>Earnings</p>
                </div><!-- col -->
              </div><!-- row -->
            </div><!-- card -->
          </div><!-- col-4 -->
          <div class="col-md-6 col-lg-4 mg-t-20 mg-lg-t-0">
            <div class="card card-popular-product">
              <label class="prod-id">Product ID: #PD-1754</label>
              <h5 class="prod-name"><a href="">US 360 Home Security IP Camera Night</a></h5>
              <p class="prod-by">By: <a href="">ThmPxls Digital</a></p>
              <div class="row">
                <div class="col-5">
                  <h1>1799</h1>
                  <p>Total Sales</p>
                </div><!-- col -->
                <div class="col-7">
                  <h1>$11,091</h1>
                  <p>Earnings</p>
                </div><!-- col -->
              </div><!-- row -->
            </div><!-- card -->
          </div><!-- col-4 -->
        </div><!-- row -->

      </div>
      </Content>
  </DetailsLayout>
</template>
