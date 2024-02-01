// package com.screensecurity2;
// import com.facebook.react.ReactApplication;
// import com.facebook.react.ReactNativeHost;
// import com.facebook.react.ReactPackage;
// import com.facebook.react.shell.MainReactPackage;

// import java.util.Arrays;
// import java.util.List;

// public class MainApplication extends Application implements ReactApplication {

//   private final ReactNativeHost mReactNativeHost =
//       new ReactNativeHost(this) {
//         @Override
//         public boolean getUseDeveloperSupport() {
//           return BuildConfig.DEBUG;
//         }

//         @Override
//         protected List<ReactPackage> getPackages() {
//           return Arrays.<ReactPackage>asList(
//               new MainReactPackage(),
//               // Agrega tu módulo aquí
//               new MyModule()
//           );
//         }
//       };

//   @Override
//   public ReactNativeHost getReactNativeHost() {
//     return mReactNativeHost;
//   }

//   // ...
// }

package com.screensecurity2;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ForegroundPackage implements ReactPackage {

   @Override
   public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
       return Collections.emptyList();
   }

   @Override
   public List<NativeModule> createNativeModules(
           ReactApplicationContext reactContext) {
       List<NativeModule> modules = new ArrayList<>();

       modules.add(new ForegroundModule(reactContext));

       return modules;
   }

}