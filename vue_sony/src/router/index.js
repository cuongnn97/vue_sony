import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/homepage/Homepage.vue'
import Login from '../views/Login.vue'
import CopyrightRegistration from '../views/copyrightRegistration/CopyrightRegistration.vue'
import CreativeWorksEdit from '../views/creativeWorks/CreativeWorksEdit.vue'

import GroupRegistration from '../views/groupRegistration/GroupRegistration.vue'
import GroupEdit from '../views/groupRegistration/GroupEdit.vue'
import PublisherRegistration from '../views/publisherRegistration/PublisherRegistration.vue'
import PublisherEdit from '../views/publisherRegistration/PublisherEdit.vue'
import PublisherInformation from '../views/publisherRegistration/PublisherInformation.vue'
import GroupInformation from '../views/groupRegistration/GroupInformation.vue'
import ContractsRegistration from '../views/contractsRegistration/ContractsRegistration.vue'

const routes = [
  
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/creative_works/new',
    name: 'CopyrightRegistration',
    component: CopyrightRegistration
  },
  {
    path: '/groups/new',
    name: 'GroupRegistration',
    component: GroupRegistration
  },
  {
    path: '/publishers/new',
    name: 'PublisherRegistration',
    component: PublisherRegistration
  },
  {
    path: '/publishers/edit',
    name: 'PublisherEdit',
    component: PublisherEdit
  },
  {
    path: '/publishers',
    name: 'PublisherInformation',
    component: PublisherInformation
  },
  {
    path: '/groups',
    name: 'GroupInformation',
    component: GroupInformation
  },
  {
    path: '/groups/edit',
    name: 'GroupEdit',
    component: GroupEdit
  },
  {
    path: '/creative_works/edit',
    name: 'CreativeWorksEdit',
    component: CreativeWorksEdit
  },
  {
    path: '/contracts/new',
    name: 'ContractsRegistration',
    component: ContractsRegistration
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
