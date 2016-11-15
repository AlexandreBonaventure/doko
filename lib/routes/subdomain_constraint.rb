module Routes
  class SubdomainConstraint
    def initialize(subdomain)
      @subdomain = subdomain
    end

    def matches?(request)
      @subdomain == request.subdomain
    end
  end
end
