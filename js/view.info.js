;(function() {
	this.Gx = this.Gx || {};
	this.Gx.InfoView = Backbone.View.extend({
		el: '#informations',
		initialize: function() {
			this.centerInfoView = new Gx.InfoViewUnit({
				el: '#center_info',
				model: new Gx.PositionModel()
			});
			this.clickedPointView = new Gx.InfoViewUnit({
				el: '#clicked_point',
				model: new Gx.PositionModel()
			});
			this.addressResultsView = new Gx.AddressResultsView({
				collection: new Gx.AddressCollection()
			});
		},
		refreshBounds: function(mapView) {
			if (!mapView.isVisible()) {
				return;
			}
			var r = Gx.Utils.round;
			this.centerInfoView.model.setAttrs(mapView.getCenter(), mapView.getZoom(), mapView.type);
		},
		setGeocodeResult: function(models, mapType) {
			var m = models[0], latLng;
			if (!m) {
				return;
			}
			latLng = m.get('latLng');
			if (latLng) {
				this.clickedPointView.model.setAttrs(latLng, null, mapType);
			}
			// clear all
			this.addressResultsView.clear();
			// add models
			_.each(models, function(model) {
				this.addressResultsView.add(model);
			}, this);
		},
		toggle: function() {
			this.$el.slideToggle('fast');
		}
	});
	this.Gx.InfoViewUnit = Backbone.View.extend({
		initialize: function() {
			_.bindAll(this, 'render');
			this.model.bind('change', this.render);
			this.tmplInfo = _.template($('#tmpl_point_info').html());
			this.tmplGoogle = _.template($('#tmpl_href_google').html());
			this.tmplOsm = _.template($('#tmpl_href_osm').html());
		},
		render: function() {
			var attrs = this.model.attributes;
			var info = this.tmplInfo(attrs);
			var href = '';
			if (this.model.isGoogle()) {
				href = this.tmplGoogle(attrs);
			} else if (this.model.isOsm()) {
				href = this.tmplOsm(attrs);
			}
			this.$el.html(info + href);
			$('.llstring').click(function() {
				$(this).select();
			});
			return this;
		}
	});
}).call(this);