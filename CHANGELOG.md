# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## 0.5.1
### Changed
- use correct Mapillary API method move to key (moveToKey, not moveCloseKey)
- update to MapillaryJS v1.4.2
### Support
- add GitHub and MapillaryJS links to dummy app
- add example of how to use move to key in dummy app

## 0.5.0
### Added
- raise an action (onLoadingChanged) whenever the loading state changes
- new moveTo property can be used to move to a node by key or location
- deprecate latLng property in favor of moveTo property
### Changed
- don't move to node until after render and calling resize()
- get Mapillary JS/CSS from CDN instead of including in vendor files

## 0.4.2
### Changed
- handle case when there's no vendor tree

## 0.4.1
### Changed
- move broccoli build tools to dependencies

## 0.4.0
### Changed
- update to mapillary-js 1.4
### Support
- redirect index route to simple example
- prevent HTTP (only) requests caused by `detect: true`
- added script to deploy to gh-pages

## 0.3.0
### Added
- listen for changes to lat/lng and update viewer location
- clean up event listeners when destroying component
# Support
- add example showing two way map interactions and esri-leaflet

## 0.2.0
### Added
- send onNodeChanged action when node changes
### Support
- add example showing how to integrate w/ ember-leaflet

## 0.1.0
### Added
- adds first working version of mapillary-viewer component

## 0.0.0
### Added
- Initial Commit from Ember CLI v2.5.0
