/** MOVE front: configure API origin via <meta name="move-api-base" content="https://host"> or window.MOVE_API_BASE. Omit for same-origin /api/... */
(function (global) {
  "use strict";

  function getApiBase() {
    var meta = document.querySelector('meta[name="move-api-base"]');
    if (meta) {
      var c = (meta.getAttribute("content") || "").trim();
      if (c) return c.replace(/\/$/, "");
    }
    if (typeof global.MOVE_API_BASE === "string" && global.MOVE_API_BASE.trim()) {
      return global.MOVE_API_BASE.trim().replace(/\/$/, "");
    }
    return "";
  }

  function apiUrl(subPath) {
    var sp = String(subPath).replace(/^\//, "");
    var path = "/api/" + sp;
    var base = getApiBase();
    if (base) return base + path;
    return path;
  }

  function fetchJson(method, subPath, opts) {
    opts = opts || {};
    var headers = { "Content-Type": "application/json", Accept: "application/json" };
    if (opts.token) headers.Authorization = "Bearer " + opts.token;
    var init = { method: method, headers: headers };
    if (opts.body !== undefined) init.body = JSON.stringify(opts.body);
    return fetch(apiUrl(subPath), init).then(function (res) {
      return res.text().then(function (text) {
        var data = null;
        try {
          data = text ? JSON.parse(text) : null;
        } catch (e) {
          data = null;
        }
        if (!res.ok) {
          var msg =
            data && data.error && data.error.message
              ? data.error.message
              : res.statusText || "Request failed";
          var err = new Error(msg);
          err.status = res.status;
          err.body = data;
          throw err;
        }
        return data;
      });
    });
  }

  var MoveApi = {
    getApiBase: getApiBase,
    apiUrl: apiUrl,
    getCategories: function (query) {
      query = query || {};
      var qs = new URLSearchParams();
      if (query.type) qs.set("type", query.type);
      var suffix = "categories" + (qs.toString() ? "?" + qs.toString() : "");
      return fetchJson("GET", suffix, {});
    },
    getLocations: function (search) {
      var qs = new URLSearchParams();
      if (search) qs.set("search", search);
      return fetchJson("GET", "locations" + (qs.toString() ? "?" + qs.toString() : ""), {});
    },
    searchListings: function (body) {
      return fetchJson("POST", "listings/search", { body: body });
    }
  };

  global.MoveApi = MoveApi;
})(typeof window !== "undefined" ? window : this);
