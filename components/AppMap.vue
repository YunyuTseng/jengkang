<template>
  <div class="row">
    <!-- PC start -->
    <div class="map d-none d-lg-flex flex-lg-row">
      <!-- 新竹 map -->
      <div class="map-list d-flex col-lg-6 pe-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.0264536318496!2d121.01625711226653!3d24.827778034044172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346836eec1712b43%3A0xaf7850f3b0d6ce26!2zMzAy5paw56u557ij56u55YyX5biC5ZiJ5LuB6KGXMTIz6JmfMQ!5e0!3m2!1szh-TW!2stw!4v1619681124979!5m2!1szh-TW!2stw"
          :class="{
            'd-none': buttonNumber !== 1,
          }"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>

        <!-- 台南 map -->
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.1168568494504!2d120.20775431480016!3d22.98272998497327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e768142510af7%3A0xc90d07353844ad57!2zNzAw5Y-w5Y2X5biC5Lit6KW_5Y2A5bqc6YCj6LevMzDomZ8!5e0!3m2!1szh-TW!2stw!4v1619688512639!5m2!1szh-TW!2stw"
          :class="{
            'd-none': buttonNumber !== 2,
          }"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>

        <!-- 深圳 map -->
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.639984057343!2d114.2396202150491!3d22.55515513929472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040c832fa16ae3%3A0xefbfce7b480b0b24!2z5Lit5ZyL5bm_5Lic55yB5rex5Zyz5biC55uQ55Sw5Yy65rW35pmv5LqM6Lev!5e0!3m2!1szh-TW!2stw!4v1637557445749!5m2!1szh-TW!2stw"
          :class="{
            'd-none': buttonNumber !== 3,
          }"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div class="map-content d-flex col-lg-6 ps-3">
        <div class="map-button">
          <button class="map-button-content" @click="switchMap(1)">新竹</button>
          <button class="map-button-content" @click="switchMap(2)">台南</button>
          <button class="map-button-content" @click="switchMap(3)">深圳</button>
        </div>
        <div v-if="NowLocationContent" class="map-location">
          <div class="title d-flex align-items-center">
            <i class="fas fa-building fa-2x icon-map"></i>
            <span class="title-info">{{ NowLocationContent.type }}</span>
          </div>
          <div class="content d-flex">
            <span class="content-info">
              地址：{{ NowLocationContent.address }}
            </span>
            <span class="content-info">
              電話：{{ NowLocationContent.phone }}
            </span>
            <span class="content-info">傳真：{{ NowLocationContent.fax }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- PC end -->

    <!-- mobile start -->
    <div class="map d-flex d-lg-none flex-column-reverse">
      <!-- 新竹 map -->
      <div
        class="map-list-card d-flex"
        :class="{
          'd-none': buttonNumber !== 1,
        }"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.0264536318496!2d121.01625711226653!3d24.827778034044172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346836eec1712b43%3A0xaf7850f3b0d6ce26!2zMzAy5paw56u557ij56u55YyX5biC5ZiJ5LuB6KGXMTIz6JmfMQ!5e0!3m2!1szh-TW!2stw!4v1619681124979!5m2!1szh-TW!2stw"
          width="100%"
          height="300"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>

      <!-- 台南 map -->
      <div
        class="map-list-card d-flex"
        :class="{
          'd-none': buttonNumber !== 2,
        }"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.1168568494504!2d120.20775431480016!3d22.98272998497327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e768142510af7%3A0xc90d07353844ad57!2zNzAw5Y-w5Y2X5biC5Lit6KW_5Y2A5bqc6YCj6LevMzDomZ8!5e0!3m2!1szh-TW!2stw!4v1619688512639!5m2!1szh-TW!2stw"
          width="100%"
          height="300"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>

      <!-- 深圳 map -->
      <div
        class="map-list-card d-flex"
        :class="{
          'd-none': buttonNumber !== 3,
        }"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.639984057343!2d114.2396202150491!3d22.55515513929472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040c832fa16ae3%3A0xefbfce7b480b0b24!2z5Lit5ZyL5bm_5Lic55yB5rex5Zyz5biC55uQ55Sw5Yy65rW35pmv5LqM6Lev!5e0!3m2!1szh-TW!2stw!4v1637557445749!5m2!1szh-TW!2stw"
          width="100%"
          height="300"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div class="map-content">
        <div class="map-button d-flex justify-content-center">
          <button class="map-button-content" @click="switchMap(1)">新竹</button>
          <button class="map-button-content" @click="switchMap(2)">台南</button>
          <button class="map-button-content" @click="switchMap(3)">深圳</button>
        </div>
        <div v-if="NowLocationContent" class="map-location-card">
          <div class="title d-flex align-items-center">
            <span class="title-info">{{ NowLocationContent.type }}</span>
          </div>
          <div class="content d-flex flex-column">
            <span class="content-info">
              地址：{{ NowLocationContent.address }}
            </span>
            <span class="content-info">
              電話：{{ NowLocationContent.phone }}
            </span>
            <span class="content-info">傳真：{{ NowLocationContent.fax }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  /** 切換地圖 */
  buttonNumber: number = 1

  locationList = [
    {
      id: 1,
      type: '新竹分部',
      location: '新竹',
      address: '新竹縣竹北市嘉仁街123號1樓',
      phone: '+886 35588690 ',
      fax: '+886 35588620',
    },
    {
      id: 2,
      type: '台南總部',
      location: '台南',
      address: '台南市中西區府連路30號1樓',
      phone: '+886 62139155',
      fax: '+886 62139193',
    },
    {
      id: 3,
      type: '深圳分部',
      location: '深圳',
      address: '深圳市鹽田區海山街道鵬灣社區深鹽路2015號5層543室',
      phone: '+86 755 25165650',
      fax: '+86 755 25165627',
    },
  ]

  /** 選擇地圖 */
  switchMap(event: number) {
    this.buttonNumber = event
  }

  /** 當前選擇內容 */
  get NowLocationContent() {
    return this.locationList.find(item => item.id === this.buttonNumber)
  }
}
</script>

<style lang="scss" scoped>
.map {
  .map-list {
    justify-content: center;
  }

  .map-content {
    flex-direction: column;
  }

  .map-button {
    width: 100%;
    .map-button-content {
      width: 20%;
      background-color: #ccc;
      border: none;
      border-radius: 100px;
      margin-right: 10px;
    }
  }

  .map-location {
    position: relative;
    background-color: #fff;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 15%);
    padding: 15px 0 0 25px;
    margin: 25px 0 0 0;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 10px;
      height: 100%;
      background-color: #ccc;
    }

    .title {
      padding: 0 0 15px 0;

      .title-info {
        font-size: 1.25rem;
        font-weight: bold;
        padding: 0 0 0 15px;
      }
    }

    .content {
      flex-direction: column;

      .content-info {
        padding: 0 0 20px 0;
      }
    }
  }

  // mobile
  .map-list-card {
    z-index: 99;
  }

  .map-location-card {
    position: relative;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 15%);
    background-color: #fff;
    padding: 15px 25px;
    margin: 25px 0 0 0;

    .title {
      margin: 0 0 10px 0;
      .title-info {
        font-size: 1.25rem;
        font-weight: bold;
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
