<template>
  <div class="containerAll">
    <div class="topRowInnerView">
      <div class="leftSideTopRow ms-16">
        <div class="leftContainer">
          <div class="Workspaces">
            <v-btn color="#ebe8e8"> {{ $store.getters.idUser }} </v-btn>
          </div>
        </div>
      </div>
      <div class="rightSideTopRow me-16">
        <v-toolbar dense floating color="#ebe8e8">
          <v-text-field
            hide-details
            single-line
            color="black"
            placeholder="Search..."
          ></v-text-field>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-toolbar>
      </div>
    </div>

    <v-divider inset class="me-16"></v-divider>

    <div class="bottomRowInnerView">
      <div class="leftColInnerView">
        <div class="leftColTitle mt-16">
          <v-icon>mdi-clock-outline</v-icon>
          Recently used...
        </div>
        <div class="leftColContent mt-16">
          <button class="cardButtons">
            <v-card class="cards" max-width="550" outlined>
              <v-list-item three-line class="spaceCards">
                <v-list-item-content>
                  <v-list-item-title class="text-h5 mb-1">
                    Title 1
                    <v-divider></v-divider>
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore aperiam nihil dolore, quaerat, explicabo.
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </button>

          <button class="cardButtons">
            <v-card class="cards" max-width="550" outlined>
              <v-list-item three-line class="spaceCards">
                <v-list-item-content>
                  <v-list-item-title class="text-h5 mb-1">
                    Title 2
                    <v-divider></v-divider>
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore aperiam nihil dolore, quaerat, explicabo.
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </button>
        </div>
      </div>


      <div class="rightColInnerView">
        <div class="rightColTitle mt-16">
          <v-icon>mdi-star-outline</v-icon>
          Favourite lists...
        </div>
        <div class="rightColContent mt-16">
          <button class="cardButtons">
            <v-card class="cards" max-width="550" outlined>
              <v-list-item three-line class="spaceCards">
                <v-list-item-content>
                  <v-list-item-title class="text-h5 mb-1">
                    Title 2
                    <v-divider></v-divider>
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore aperiam nihil dolore, quaerat, explicabo.
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FirstInnerView",
};
</script>

<style>
@import url("../../assets/css/innerViews/firstInnerView.css");
</style>