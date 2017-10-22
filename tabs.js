function Tabs(el) {
  this.$el = $(el);
  this.$tabs = this.$el.find('[data-role=tab]');
  this.$tabContents = this.$el.find('[data-role=tabcontent]');

  var that = this;

  function removeActive($activeTab, $activeTabContent) {
    $activeTab.removeClass('active');
    $activeTabContent.removeClass('active');
  };

  function addActive($tab, $tabContent) {
    $tab.addClass('active');
    $tabContent.addClass('active');
  };

  function findActive($el) {
    return $el.filter('.active');
  };

  function bindClick(el, index) {
    var $tab = $(el);
    var $tabContent = that.$tabContents.eq(index);

    $tab.on('click.tabs', function(event) {
      event.preventDefault();

      var $activeTab = findActive(that.$tabs);
      var $activeTabContent = findActive(that.$tabContents);

      removeActive($activeTab, $activeTabContent);
      addActive($tab, $tabContent);

      return false;
    });
  };

  this.$tabs.each(function(index) {
    bindClick(this, index);
  });
};