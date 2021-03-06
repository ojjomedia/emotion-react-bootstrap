import { storiesOf } from '@storybook/react';
import formStories from './form.stories';
import FormReadme from '../lib/form/README.md';
import layout from './layout.stories';
import LayoutReadme from '../lib/layout/README.md';
import BadgeReadme from '../lib/badge/README.md';
import {
  Example1,
  Example2,
  Example3,
  Example4,
  Example5,
} from './badge.stories';
import buttonStories from './button.stories';
import buttonGroupStories from './button-group.stories';
import ButtonReadme from '../lib/button/README.md';
import ButtonGroupReadme from '../lib/button-group/README.md';
import DropdownReadme from '../lib/dropdown/README.md';
import dropdownStories from './dropdown.stories';
import { FadeStory } from './fade.stories';
import {
  SimpleAlertStory,
  ColorsAlertStory,
  AlertContentStory,
  AlertWithLinkStory,
  AlertDismissStory,
} from './alert.stories';
import { AlertFadelessStory } from './alert.fadeless.stories';
import { BreadcrumbStory } from './breadcrumb.stories';
import BreadcrumbReadme from '../lib/breadcrumb/README.md';
import tableStories from './table.stories';
import TableReadme from '../lib/table/README.md';
import {
  PaginationStory,
  PaginationActiveStory,
  PaginationDisabledStory,
  PaginationLargeStory,
  PaginationSmallStory,
} from './pagination.stories';
import PaginationReadme from '../lib/pagination/README.md';
import popoverStories from './popovers';
import PopoverReadme from '../lib/popovers/README.md';
import jumbotronStories from './jumbotron.stories';
import JumbotronReadme from '../lib/jumbotron/README.md';
import CarouselStory from './carousel.stories';
import CarouselReadme from '../lib/carousel/README.md';
import CollapseStory from './collapse.stories';
import CollapseReadme from '../lib/collapse/README.md';
import inputGroupStories from './input-group.stories';
import InputGroupReadme from '../lib/input-group/README.md';
import cardStories from './card';
import CardReadme from '../lib/card/README.md';
import listGroupStories from './list-group.stories';
import ListGroupReadme from '../lib/list-group/README.md';
import mediaStories from './media.stories';
import modalStories from './modal.stories';
import ModalReadme from '../lib/modal/README.md';
import navStories from './nav.stories';
import navReadme from '../lib/nav/README.md';
import progressStories from './progress.stories';
import progressReadme from '../lib/progress/README.md';
import navbarStories from './navbar.stories';
import navbarReadme from '../lib/navbar/README.md';
import tabsStories from './tabs.stories';
import tabReadme from '../lib/tab/README.md';
import tooltipsStories from './tooltips';
import TooltipsReadme from '../lib/tooltip/README.md';

modalStories.forEach(
  function cb(entry) {
    this.add(entry.name, entry.story);
  },
  storiesOf('Components/Modal', module).addParameters({
    readme: { sidebar: ModalReadme },
  }),
);

mediaStories.forEach(function cb(entry) {
  this.add(entry.name, entry.story);
}, storiesOf('Layout/Media', module));

storiesOf('Layout', module)
  .addParameters({ readme: { sidebar: LayoutReadme } })
  .add('Grid', layout);

tableStories.forEach(
  function cb(entry) {
    this.add(entry.name, entry.story);
  },
  storiesOf('Components/Tables', module).addParameters({
    readme: { sidebar: TableReadme },
  }),
);

storiesOf('Components/Alert', module)
  .add('Simple Alert', SimpleAlertStory)
  .add('Alert Colors', ColorsAlertStory)
  .add('Alert with content', AlertContentStory)
  .add('Alert with link', AlertWithLinkStory)
  .add('Alert with dismiss', AlertDismissStory)
  .add('Alert with dismiss no fade', AlertFadelessStory);

storiesOf('Components/Badge', module)
  .addParameters({ readme: { sidebar: BadgeReadme } })
  .add('Example', Example1)
  .add('Notifications', Example2)
  .add('Contextual variations', Example3)
  .add('Pills', Example4)
  .add('Links', Example5);

storiesOf('Components/Breadcrumb', module)
  .addParameters({ readme: { sidebar: BreadcrumbReadme } })
  .add('Breadcrumb', BreadcrumbStory);

buttonStories.forEach(
  function cb(entry) {
    this.add(entry.name, entry.story);
  },
  storiesOf('Components/Buttons', module).addParameters({
    readme: { sidebar: ButtonReadme },
  }),
);

buttonGroupStories.forEach(
  function cb(entry) {
    this.add(entry.name, entry.story);
  },
  storiesOf('Components/Button Group', module).addParameters({
    readme: { sidebar: ButtonGroupReadme },
  }),
);

cardStories.forEach(
  function cb(entry) {
    this.add(entry.name, entry.story);
  },
  storiesOf('Components/Card', module).addParameters({
    readme: { sidebar: CardReadme },
  }),
);

dropdownStories.forEach(
  function cb(entry) {
    this.add(entry.name, entry.story);
  },
  storiesOf('Components/Dropdowns', module).addParameters({
    readme: { sidebar: DropdownReadme },
  }),
);

storiesOf('Components/Fade', module).add('Simple', FadeStory);

formStories.forEach(
  function cb(entry) {
    this.add(entry.name, entry.story);
  },
  storiesOf('Components/Form', module).addParameters({
    readme: { sidebar: FormReadme },
  }),
);

inputGroupStories.forEach(
  function cb(entry) {
    this.add(entry.name, entry.story);
  },
  storiesOf('Components/Input Group', module).addParameters({
    readme: { sidebar: InputGroupReadme },
  }),
);

listGroupStories.forEach(
  function cb(entry) {
    this.add(entry.name, entry.story);
  },
  storiesOf('Components/List Group', module).addParameters({
    readme: { sidebar: ListGroupReadme },
  }),
);

storiesOf('Components/Pagination', module)
  .addParameters({ readme: { sidebar: PaginationReadme } })
  .add('Pagination Simple', PaginationStory)
  .add('Pagination Active', PaginationActiveStory)
  .add('Pagination Disabled', PaginationDisabledStory)
  .add('Pagination Large', PaginationLargeStory)
  .add('Pagination Small', PaginationSmallStory);

popoverStories.forEach(
  function cb(entry) {
    this.add(entry.name, entry.story);
  },
  storiesOf('Components/Popovers', module).addParameters({
    readme: { sidebar: PopoverReadme },
  }),
);

storiesOf('Components/Carousel', module)
  .addParameters({ readme: { sidebar: CarouselReadme } })
  .add('Example', CarouselStory);

storiesOf('Components/Collapse', module)
  .addParameters({ readme: { sidebar: CollapseReadme } })
  .add('Example', CollapseStory);

jumbotronStories.forEach(
  function cb(entry) {
    this.add(entry.name, entry.story);
  },
  storiesOf('Components/Jumbotron', module).addParameters({
    readme: { sidebar: JumbotronReadme },
  }),
);

navStories.forEach(
  function cb(entry) {
    this.add(entry.name, entry.story);
  },
  storiesOf('Components/Nav', module).addParameters({
    readme: { sidebar: navReadme },
  }),
);

progressStories.forEach(
  function cb(entry) {
    this.add(entry.name, entry.story);
  },
  storiesOf('Components/Progress', module).addParameters({
    readme: { sidebar: progressReadme },
  }),
);

navbarStories.forEach(
  function cb(entry) {
    this.add(entry.name, entry.story);
  },
  storiesOf('Components/Navbar', module).addParameters({
    readme: { sidebar: navbarReadme },
  }),
);

tabsStories.forEach(
  function cb(entry) {
    this.add(entry.name, entry.story);
  },
  storiesOf('Components/Tabs', module).addParameters({
    readme: { sidebar: tabReadme },
  }),
);

if (process.env.NODE_ENV !== 'test') {
  tooltipsStories.forEach(
    function cb(entry) {
      this.add(entry.name, entry.story);
    },
    storiesOf('Components/Tooltips', module).addParameters({
      readme: { sidebar: TooltipsReadme },
    }),
  );
}
