<template>
  <nav>

    <v-toolbar flat class="topBar d-flex flex-row justify-center align-center">
      <v-toolbar-title class="topBarStyles">
        <span class="font-weight-bold taaskinLogo">Taaskin</span>
      </v-toolbar-title>
    </v-toolbar>

    <div class="d-flex flex-column justify-center align-center leftMenuBar">
      <div class="d-flex flex-row justify-center align-center">

        <v-expansion-panels focusable>
          <v-expansion-panel class="expansionPanels mb-16">
            <v-expansion-panel-header>Groups</v-expansion-panel-header>
            <v-expansion-panel-content>
              <div>a</div>
              <div>a</div>
              <div>a</div>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel class="expansionPanels mb-16">
            <v-expansion-panel-header>Friends</v-expansion-panel-header>
            <v-expansion-panel-content>
              <div>a</div>
              <div>a</div>
              <div>a</div>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel class="expansionPanels mb-16">
            <v-expansion-panel-header>Panels</v-expansion-panel-header>
            <v-expansion-panel-content>
              <div>a</div>
              <div>a</div>
              <div>a</div>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel class="expansionPanels mb-16">
            <v-expansion-panel-header>Lists</v-expansion-panel-header>
            <v-expansion-panel-content>
              <div>a</div>
              <div>a</div>
              <div>a</div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>  

      </div>
      <div class="bottomBar d-flex flex-row align-center justify-space-between border1">
        <div class="d-flex flex-row justify-space-between align-center ms-5 leftSideBottomBar">
          <div>
            <a href="">
              <v-icon
                color="black"
                class="iconsBottomBar"
              >
                mdi-account-plus
              </v-icon>
            </a>
          </div>
          <div>
            <a href="">
              <v-icon
                color="black"
                class="iconsBottomBar"
              >
                mdi-account-multiple-plus
              </v-icon>
            </a>
          </div>
        </div>
        <div class="d-flex flex-row justify-end me-5 rightSideBottomBar ">
          <a href="">
            <v-icon
              color="black"
              class="iconsBottomBar"
            >
              mdi-cog
            </v-icon>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

  export default {
    name: 'topBar',
  }
</script>

<style>
@import url('../assets/css/navbars.css');
</style>