# https://devhints.io/makefile

ifneq (,$(wildcard ./.env))
	include .env
	export
endif

.ONESHELL:
.PHONY: setup sync install_apk open_ios open_android debug_android

setup:
	npm install
	cd ios/App
	bundle install
	bundle exec pod repo update
	bundle exec pod install

sync:
	npx tsc --noEmit
	npx vite build --config src/first_page/vite.config.ts
	npx cap sync
	npx capacitor-set-version -v $(VITE_APP_VERSION) -b $(VITE_APP_BUILD)

install_apk:
	adb install android/app/release/app-release.apk

open_ios:
	npx cap open ios

open_android:
	npx cap open android

debug_android:
	open -a "Google Chrome" chrome://inspect/#devices
