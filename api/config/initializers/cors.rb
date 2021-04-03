
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    # Allow any website for entrypoint.
    origins '*'

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
